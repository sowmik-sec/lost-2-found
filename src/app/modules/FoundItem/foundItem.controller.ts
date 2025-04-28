import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { FoundItemServices } from "./foundItem.service";
import pick from "../../../shared/pick";
import { foundItemFilterableFields } from "./foundItem.constant";

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

const getAllFoundItems = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, foundItemFilterableFields);
  const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
  const result = await FoundItemServices.getAllFoundItems(filters, options);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Found Items retrieved successfully",
    data: result,
  });
});
export const FoundItemControllers = {
  createFoundItem,
  getAllFoundItems,
};
