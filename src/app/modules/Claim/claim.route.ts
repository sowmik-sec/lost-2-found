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
router.patch(
  "/:claimId",
  auth(),
  validateRequest(ClaimValidations.updateClaimStatusZodValidation),
  ClaimController.updateClaimStatus
);

router.get("/", auth(), ClaimController.getClaims);
export const ClaimRouters = router;
