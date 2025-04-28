import { z } from "zod";

const createFoundItemZodSchema = z.object({
  body: z.object({
    categoryId: z.string({ required_error: "Category Id is required" }),
    foundItemName: z.string({ required_error: "Item name is required" }),
    description: z.string({ required_error: "Description is required" }),
    location: z.string({ required_error: "Location is required" }),
  }),
});

export const FoundItemValidations = {
  createFoundItemZodSchema,
};
