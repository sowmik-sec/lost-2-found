import { z } from "zod";

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

export const ClaimValidations = {
  createClaimZodValidation,
};
