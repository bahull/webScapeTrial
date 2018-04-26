const puppeteer = require("puppeteer");
const fs = require("fs");

const sleep = require(`${__dirname}/utils`);

const writeToFile = data => {
  fs.writeFile("./data.json", JSON.stringify(data), err => {
    if (err) return console.error(err);
    process.exit();
  });
};

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://en.wikipedia.org/wiki/Main_Page");
})();
