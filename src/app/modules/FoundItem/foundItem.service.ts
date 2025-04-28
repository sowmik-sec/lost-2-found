import { StatusCodes } from "http-status-codes";
import prisma from "../../../shared/prisma";
import ApiError from "../../errors/ApiError";
import { TPaginationOptions } from "../../interface/pagination";
import { paginationHelper } from "../../../helpers/paginationHelper";
import { Prisma } from "../../../../generated/prisma";
import { foundItemSearchableFields } from "./foundItem.constant";

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

const getAllFoundItems = async (params: any, options: TPaginationOptions) => {
  const { limit, page, skip } = paginationHelper.calculatePagination(options);
  const { searchTerm, ...filteredData } = params;
  const andConditions: Prisma.FoundItemWhereInput[] = [];
  console.log({ params });
  if (params.searchTerm) {
    console.log("searchTerm ", params.searchTerm);
    andConditions.push({
      OR: foundItemSearchableFields.map((field) => ({
        [field]: {
          contains: params.searchTerm,
        },
      })),
    });
  }
  if (Object.keys(filteredData).length > 0) {
    andConditions.push({
      AND: Object.keys(filteredData).map((key) => ({
        [key]: {
          equals: (filteredData as any)[key],
        },
      })),
    });
  }
  const whereConditions: Prisma.FoundItemWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};
  console.dir(whereConditions, { depth: "infinity" });
  const result = await prisma.foundItem.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: options.sortOrder,
          }
        : {
            createdAt: "desc",
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
  const total = await prisma.foundItem.count({
    where: whereConditions,
  });
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

export const FoundItemServices = {
  createFoundItem,
  getAllFoundItems,
};
