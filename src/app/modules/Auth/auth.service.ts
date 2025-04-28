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
    userId: isUserExists.id,
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

const getMyProfile = async (id: string) => {
  const result = await prisma.profile.findUnique({
    where: {
      userId: id,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          createdAt: true,
          updatedAt: true,
        },
      },
    },
  });
  return result;
};

const updateMyProfileIntoDB = async (
  userId: string,
  payload: { bio: string; age: number }
) => {
  const isUserExists = await prisma.profile.findUnique({
    where: {
      userId,
    },
  });
  if (!isUserExists) {
    throw new ApiError(StatusCodes.NOT_FOUND, "User not found");
  }
  const result = await prisma.profile.update({
    where: {
      userId,
    },
    data: payload,
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          createdAt: true,
          updatedAt: true,
        },
      },
    },
  });
  return result;
};

export const AuthServices = {
  login,
  getMyProfile,
  updateMyProfileIntoDB,
};
