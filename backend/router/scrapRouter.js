import express from "express";
import { scrapeData,getJobByProfile } from "../controller/scarpData.js";

const scrapRouter = express.Router();
scrapRouter.get("/scrap", scrapeData);
scrapRouter.get("/scrap/job/profile/:profile", getJobByProfile);
export default scrapRouter;