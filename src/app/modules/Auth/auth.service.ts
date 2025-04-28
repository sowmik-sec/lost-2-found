import prisma from "../../../shared/prisma";
import bcrypt from "bcrypt";
import ApiError from "../../errors/ApiError";
import StatusCodes from "http-status";
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import config from "../../../config";
import { Secret } from "jsonwebtoken";

const login = async (payload: { email: string; password: string }) => {
  const isUserExists = await prisma.user.findUniqueOrThrow({
    where: {
      email: payload.email,
    },
  });
  const isPasswordMatched = await bcrypt.compare(
    payload.password,
    isUserExists.password
  );
  if (!isPasswordMatched) {
    throw new ApiError(StatusCodes.UNAUTHORIZED, "Unauthorized");
  }
  const jwtPayload = {
    email: payload.email,
  };
  const accessToken = jwtHelpers.generateToken(
    jwtPayload,
    config.jwt.jwt_secret as Secret,
    config.jwt.jwt_expires_in as string
  );
  const refreshToken = jwtHelpers.generateToken(
    jwtPayload,
    config.jwt.jwt_secret as Secret,
    config.jwt.jwt_expires_in as string
  );
  return {
    id: isUserExists.id,
    name: isUserExists.name,
    email: isUserExists.email,
    accessToken,
    refreshToken,
  };
};

export const AuthServices = {
  login,
};
