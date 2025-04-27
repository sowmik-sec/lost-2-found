import { z } from "zod";

const createUserZodSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required" }),
    email: z.string({ required_error: "Email is required" }),
    password: z.string({ required_error: "Password is required" }),
    age: z.number({ required_error: "Age is required" }),
    bio: z.string({ required_error: "Bio is required" }),
  }),
});

export const UserValidations = {
  createUserZodSchema,
};
