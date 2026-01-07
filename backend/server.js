// console.log("Server is starting..........................");
import express from "express";
import dotenv from "dotenv";
import router from "./router/indexRouter.js";
import chalk from "chalk";
import { scheduleCronJobs } from "./cronschedule/cronjobs.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());


app.use("/", router);

scheduleCronJobs();
app.listen(PORT, () => {
    // console.log(`Server is running on port ${PORT}`);
    const url = `http://localhost:${PORT}`;
  console.log(chalk.green.bold(`Server is running at:`), chalk.cyan.underline(url));
});
