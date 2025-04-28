import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { ClaimServices } from "./claim.service";
import sendResponse from "../../../shared/sendResponse";

const createFoundItem = catchAsync(async (req: Request, res: Response) => {
  const result = await ClaimServices.createClaimIntoDb(
    req.user.userId,
    req.body
  );
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Claim created successfully",
    data: result,
  });
});

export const ClaimController = {
  createFoundItem,
};
