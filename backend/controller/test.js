export const test = async (req, res) => {
    // console.log("Test function in controller is working");
    res.status(200).json({ message: "Test function in controller is working" });
}

export const hello = async (req, res) => {
    // console.log("Hello from controller");
    res.status(200).json({ message: "Hello from controller" });
}

// export const scrapeData = async (req, res) => {
//     // console.log("Scrape Data function in controller is working");
//     res.status(200).json({ message: "Scrape Data function in controller is working" });
// }

