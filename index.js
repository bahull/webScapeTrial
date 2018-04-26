const puppeteer = require("puppeteer");
const fs = require("fs");

const writeToFile = data => {
  fs.writeFile("./data.json", JSON.stringify(data), err => {
    if (err) return console.error(err);
    process.exit();
  });
};
