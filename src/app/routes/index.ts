import express from "express";
import { UserRoutes } from "../modules/User/user.routes";
import { AuthRouters } from "../modules/Auth/auth.routes";
const router = express.Router();

const routes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRouters,
  },
];

routes.forEach((route) => router.use(route.path, route.route));

export default router;
