import express from "express";
import { scrapeData } from "../controller/scarpData.js";

const scrapRouter = express.Router();
scrapRouter.get("/scrap", scrapeData);
export default scrapRouter;