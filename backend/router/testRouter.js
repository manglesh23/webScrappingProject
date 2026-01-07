import express from "express";
import { test, hello } from "../controller/test.js";
const testRouter = express.Router();

testRouter.get("/test", test);
testRouter.get("/hello", hello);
export default testRouter;