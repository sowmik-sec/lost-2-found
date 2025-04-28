import express from "express";
import { AuthController } from "./auth.controller";
import validateRequest from "../../middlewares/validateRequest";
import { AuthValidations } from "./auth.validation";
import auth from "../../middlewares/auth";
const router = express.Router();

router.post(
  "/login",
  validateRequest(AuthValidations.loginZodValidation),
  AuthController.login
);
router.get("/my-profile", auth(), AuthController.getMyProfile);

export const AuthRouters = router;
