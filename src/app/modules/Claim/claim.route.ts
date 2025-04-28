import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ClaimValidations } from "./claim.validate";
import auth from "../../middlewares/auth";
import { ClaimController } from "./claim.controller";
const router = express.Router();

router.post(
  "/create-claim",
  auth(),
  validateRequest(ClaimValidations.createClaimZodValidation),
  ClaimController.createFoundItem
);

export const ClaimRouters = router;
