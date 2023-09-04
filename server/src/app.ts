/* eslint-disable @typescript-eslint/no-unused-vars */
import MongoStore from "connect-mongo";
import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import session from "express-session";
import createHttpError, { isHttpError } from "http-errors";
import morgan from "morgan";
import env from "./utils/validateEnv";
import studentRouter from "./routes/studentRoutes";
import {
  errorResponseHandler,
  invalidPathHandler,
} from "./middleware/errorHandler";

const app = express();

app.use(morgan("dev"));

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/student", studentRouter);

app.use(invalidPathHandler);
app.use(errorResponseHandler);


export default app;

// app.use((req, res, next) => {
//     next(createHttpError(404, "Endpoint not found"));
// });

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
//     console.error(error);
//     let errorMessage = "An unknown error occurred";
//     let statusCode = 500;
//     if (isHttpError(error)) {
//         statusCode = error.status;
//         errorMessage = error.message;
//     }
//     res.status(statusCode).json({ error: errorMessage });
// });
