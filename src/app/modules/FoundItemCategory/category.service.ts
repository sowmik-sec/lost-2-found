import { StatusCodes } from "http-status-codes";
import prisma from "../../../shared/prisma";
import ApiError from "../../errors/ApiError";
import { FoundItemCategory } from "../../../../generated/prisma";

const createCategoryIntoDB = async (payload: {
  name: string;
}): Promise<FoundItemCategory> => {
  const isCategoryExists = await prisma.foundItemCategory.findUnique({
    where: {
      name: payload.name,
    },
  });
  if (isCategoryExists) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Category already exists");
  }
  const result = await prisma.foundItemCategory.create({
    data: payload,
  });
  return result;
};

export const CategoryServices = {
  createCategoryIntoDB,
};
