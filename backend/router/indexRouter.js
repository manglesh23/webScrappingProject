import express from "express";
import testRouter from "./testRouter.js";
import scrapRouter from "./scrapRouter.js";

const router = express.Router();
router.use("/api", testRouter);
router.use("/api", scrapRouter)

export default router;