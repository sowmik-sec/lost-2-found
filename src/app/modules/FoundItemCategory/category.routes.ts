import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { CategoryValidations } from "./category.validations";
import { CategoryControllers } from "./category.controller";
const router = express.Router();

router.post(
  "/found-item-categories",
  validateRequest(CategoryValidations.createCategoryZodSchema),
  CategoryControllers.createCategory
);

export const CategoryRoutes = router;
