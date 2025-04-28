import express, { Application, Request, Response } from "express";
import router from "./app/routes";
export const app: Application = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.json("Lost 2 Found");
});

app.use("/api/v1", router);

app.use(globalErrorHandler);
