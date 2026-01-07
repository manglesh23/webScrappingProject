import axios from "axios";
import * as cheerio from "cheerio";
const URL = "https://remoteok.com/remote-jobs.json";

export const getRemoteOkJobs = async () => {
    const { data } = await axios.get(URL, {
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/  58.0.3029.110 Safari/537.3"
        }
    });
    // console.log(data)
    // console.log("HTML:-",html.slice(0,500))//
    
    // const $ = cheerio.load(html);
    // // console.log("Cheerio loaded", $.html());
    // const jobs = [];
    // // console.log($('tr.job[0]'));
    // // console.log($('tr.job[data-id]').length);
    // console.log($('#jobsboard').length);
    // console.log($('#jobsboard tr.job').length);
    // console.log($('#jobsboard tr.job').first().html());

    //  $('#jobsboard tbody tr.job').each((_, element) => {
    //     const title = $(element).find('h2').first().text().trim();
    //     const company = $(element).find('h3').first().text().trim();

    //     if (!title || !company) return;

    //     const location = $(element).find('.location').first().text().trim();

    //     const tags = [];
    //     $(element).find('.tag').each((_, tag) => {
    //         const t = $(tag).text().trim();
    //         if (t) tags.push(t);
    //     });

    //     jobs.push({
    //         title,
    //         company,
    //         location: location || 'Remote',
    //         tags
    //     });
    // });

    // return $.html();//jobs;
    const jobs = data.slice(1);

  return jobs.map(job => ({
    id: job.id,
    title: job.position,
    company: job.company,
    location: job.location || "Remote",
    tags: job.tags || [],
    url: job.url,
    date: job.date
  }));
};
    

