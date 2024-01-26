import { FullConfig } from "@playwright/test";
import dotenv from 'dotenv';

async function globalSetup(config:FullConfig) {
    console.log(process.env.ENV);
    var path = `./resources/.env.${process.env.ENV}`
    dotenv.config({              
        path: path,
        override: true  //override existing value declared in config file
    })
    console.log("testdata");
}

export default globalSetup;