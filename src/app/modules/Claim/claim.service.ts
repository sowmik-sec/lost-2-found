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

export const ClaimServices = {
  createClaimIntoDb,
};
