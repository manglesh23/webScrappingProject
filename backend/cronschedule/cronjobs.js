import cron from "node-cron";

console.log("Cron Job Scheduler Initialized.");
export const scheduleCronJobs = () => {
    cron.schedule("*/1 * * * *", async() => {
        console.log("Cron Job executed at midnight to scrape job data.", new Date());
        
    }); 
}
