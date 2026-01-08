import express from "express";
import { scrapeData,getJobByProfile } from "../controller/scarpData.js";
import { scrappingConroller } from "../controller/scrappingController.js";

const scrapRouter = express.Router();
scrapRouter.get("/scrap", scrapeData);
scrapRouter.get("/scrap/job/profile/:profile", getJobByProfile);
scrapRouter.get("/scrap/getdata",scrappingConroller);
export default scrapRouter;