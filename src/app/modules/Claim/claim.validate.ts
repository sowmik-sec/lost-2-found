import { z } from "zod";
import { Status } from "../../../../generated/prisma";

const createClaimZodValidation = z.object({
  body: z.object({
    foundItemId: z.string({ required_error: "Found Item ID is required" }),
    distinguishingFeatures: z.string({
      required_error: "distinguishingFeatures is required",
    }),
    lostDate: z.string({
      required_error: "lost date is required",
    }),
  }),
});

const updateClaimStatusZodValidation = z.object({
  body: z.object({
    status: z.enum([Status.PENDING, Status.APPROVED, Status.REJECTED]),
  }),
});

export const ClaimValidations = {
  createClaimZodValidation,
  updateClaimStatusZodValidation,
};
