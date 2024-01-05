import test from "@playwright/test";
import fs from 'fs'; //aloows to work with file system for reading files
import { parse } from "csv-parse/sync"; //parsing csv file to json objects
import path from 'path'; //transforming and handling flie paths


const records = parse(fs.readFileSync(path.join(__dirname,'loginData.csv')), // read content from csv file
{ 
    columns: true, // treat first row in csv file as header
    skip_empty_lines:true 
});

for(const record of records) {
    test(`Login from CSV file ${record.test_case}`, async({page}) => {
    console.log(record);
    await page.goto('https://login.salesforce.com');
    await page.waitForLoadState('load');
    await page.fill('#username',record.username);
    await page.fill('#password',record.password);
    await page.click('#Login');
    await page.waitForLoadState('load');
    });
}

