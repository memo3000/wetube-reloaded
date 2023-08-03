import express from "express";
import { join } from "../controllers/userControllers"
import { trending } from "../controllers/videoControllers"

const globalRouter = express.Router();

globalRouter.get("/", handleHome);
globalRouter.get("/join", handleJoin);

export default globalRouter;