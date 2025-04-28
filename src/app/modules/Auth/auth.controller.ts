import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { AuthServices } from "./auth.service";

const login = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthServices.login(req.body);
  const { refreshToken, ...userData } = result;
  const { accessToken, ...remData } = userData;
  res.cookie("refreshToken", refreshToken);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "User Logged in successfully",
    data: {
      ...remData,
      token: accessToken,
    },
  });
});

export const AuthController = {
  login,
};
