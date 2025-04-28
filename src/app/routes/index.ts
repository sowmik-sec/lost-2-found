import express from "express";
import { UserRoutes } from "../modules/User/user.routes";
import { AuthRouters } from "../modules/Auth/auth.routes";
import { CategoryRoutes } from "../modules/FoundItemCategory/category.routes";
import { FoundItemRoutes } from "../modules/FoundItem/foundItem.routes";
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
  {
    path: "/categories",
    route: CategoryRoutes,
  },
  {
    path: "/found-items",
    route: FoundItemRoutes,
  },
];

routes.forEach((route) => router.use(route.path, route.route));

export default router;
