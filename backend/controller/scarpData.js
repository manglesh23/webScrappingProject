import { getRemoteOkJobs } from "../services.js/remoteok.js";

export const scrapeData = async (req, res) => {
    let getData=await getRemoteOkJobs();
    // console.log("Scrape Data function in controller is working");
    res.status(200).json({ message: "Scrape Data controller", data: getData });
}