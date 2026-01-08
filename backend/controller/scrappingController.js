
import { scrappingServices } from "../services.js/scrappingServices.js";
import { retry } from "../utils/retry.js";
export const scrappingConroller = async () => {
    // let getData = await scrappingServices();
    // return getData;
    let getData = await retry(async () => {
        return await scrappingServices();
    }, {
        retries: 5,
        delay: 2000,
        onRetry: (err, attempt) => {
            console.log(`Scrapping attempt ${attempt} failed. Retrying...`, err.message);
        }
    });
    // return getData;
    console.log("Scrapping Controller executed.", getData, new Date());
    // res.status(200).json({ message: "Scrapping Controller executed.", data: getData ,});
}