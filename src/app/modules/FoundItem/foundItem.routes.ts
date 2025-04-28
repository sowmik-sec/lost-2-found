import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import auth from "../../middlewares/auth";
import { FoundItemValidations } from "./foundItem.validation";
import { FoundItemControllers } from "./foundItem.controller";
const router = express.Router();

router.post(
  "/create-found-item",
  auth(),
  validateRequest(FoundItemValidations.createFoundItemZodSchema),
  FoundItemControllers.createFoundItem
);

router.get("/", auth(), FoundItemControllers.getAllFoundItems);

export const FoundItemRoutes = router;
