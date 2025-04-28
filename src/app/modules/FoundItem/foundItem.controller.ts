import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { FoundItemServices } from "./foundItem.service";

const createFoundItem = catchAsync(async (req: Request, res: Response) => {
  const result = await FoundItemServices.createFoundItem(
    req.user.userId,
    req.body
  );
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Found Item created successfully",
    data: result,
  });
});

export const FoundItemControllers = {
  createFoundItem,
};
