import { StatusCodes } from "http-status-codes";
import prisma from "../../../shared/prisma";
import ApiError from "../../errors/ApiError";

const createFoundItem = async (
  userId: string,
  payload: {
    categoryId: string;
    foundItemName: string;
    description: string;
    location: string;
  }
) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  if (!user) {
    throw new ApiError(StatusCodes.NOT_FOUND, "User not found");
  }
  const category = await prisma.foundItemCategory.findUnique({
    where: {
      id: payload.categoryId,
    },
  });
  if (!category) {
    throw new ApiError(StatusCodes.NOT_FOUND, "Category not found");
  }
  const result = await prisma.foundItem.create({
    data: {
      userId,
      categoryId: payload.categoryId,
      foundItemName: payload.foundItemName.trim(),
      description: payload.description.trim(),
      location: payload.location.trim(),
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
      category: {
        select: {
          id: true,
          name: true,
          createdAt: true,
          updatedAt: true,
        },
      },
    },
  });
  return result;
};

export const FoundItemServices = {
  createFoundItem,
};
