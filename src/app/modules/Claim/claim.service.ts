import { StatusCodes } from "http-status-codes";
import { Claim, Status } from "../../../../generated/prisma";
import prisma from "../../../shared/prisma";
import ApiError from "../../errors/ApiError";

const createClaimIntoDb = async (
  userId: string,
  payload: {
    foundItemId: string;
    distinguishingFeatures: string;
    lostDate: Date;
  }
): Promise<Claim> => {
  const isItemExists = await prisma.foundItem.findUnique({
    where: {
      id: payload.foundItemId,
    },
  });
  if (!isItemExists) {
    throw new ApiError(StatusCodes.NOT_FOUND, "Item not found");
  }
  const claimData = {
    ...payload,
    status: Status.PENDING,
    userId,
  };
  const result = await prisma.claim.create({
    data: claimData,
  });
  return result;
};

const getClaimsFromDB = async () => {
  const result = await prisma.claim.findMany({
    include: {
      foundItem: {
        select: {
          id: true,
          userId: true,
          categoryId: true,
          foundItemName: true,
          description: true,
          location: true,
          createdAt: true,
          updatedAt: true,
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
      },
    },
  });
  return result;
};

const updateClaimStatus = async (claimId: string, status: Status) => {
  console.log(status);
  const isClaimExists = await prisma.claim.findUnique({
    where: {
      id: claimId,
    },
  });
  if (!isClaimExists) {
    throw new ApiError(StatusCodes.NOT_FOUND, "Claim not found");
  }
  // console.log({ isClaimExists });
  const updateClaim = await prisma.claim.update({
    where: {
      id: claimId,
    },
    data: {
      status,
    },
  });
  return updateClaim;
};

export const ClaimServices = {
  createClaimIntoDb,
  getClaimsFromDB,
  updateClaimStatus,
};
