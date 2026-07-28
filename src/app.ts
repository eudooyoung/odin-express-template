import express from "express";
import errorHandler from "./errors/errorHandler.js";

export const createApp = () => {
  const app = express();

  app.use(express.json()).use(express.urlencoded({ extended: true }));

  app.use(errorHandler);

  return app;
};
