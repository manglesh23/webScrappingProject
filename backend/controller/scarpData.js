import { getRemoteOkJobs } from "../services.js/remoteok.js";

export const scrapeData = async (req, res) => {
    let getData = await getRemoteOkJobs();
    res.status(200).json({ message: "Scraped Job Data From RemoteOK", data: getData });
}

export const getJobByProfile = async (req, res) => {
    const { profile } = req.params;
    console.log("Profile to filter jobs:-", profile.toLowerCase());
    let { jobData } = await getRemoteOkJobs();

    // console.log("Total jobs fetched:", jobData[1]);
    let filteredJobs = jobData.filter(job => job.job_profile.toLowerCase().includes(profile.toLowerCase()));
    res.status(200).json({ message: `Jobs filtered by profile: ${profile}`, total_Job_For_Profile: filteredJobs.length, data: filteredJobs });
}