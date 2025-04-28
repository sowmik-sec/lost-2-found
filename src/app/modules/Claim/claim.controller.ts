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

const getClaims = catchAsync(async (req: Request, res: Response) => {
  const result = await ClaimServices.getClaimsFromDB();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Claim retrieved successfully",
    data: result,
  });
});

const updateClaimStatus = catchAsync(async (req: Request, res: Response) => {
  const { status } = req.body;
  const result = await ClaimServices.updateClaimStatus(
    req.params.claimId,
    status
  );
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Claim updated successfully",
    data: result,
  });
});

export const ClaimController = {
  createFoundItem,
  getClaims,
  updateClaimStatus,
};
