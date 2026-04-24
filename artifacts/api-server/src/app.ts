// @ts-nocheck
import express, { type Express } from "express";
import cors from "cors";
import router from "./routes";

const app: Express = express();

// This replaces the broken pino logger with a standard one that never fails
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;