import { FullConfig } from "@playwright/test";
import dotenv from 'dotenv';

async function globalSetup(config:FullConfig) {

    if(process.env.test) {
        dotenv.config({
            path: `../resources/.${process.env.test}`,
        })
    }
    
}

export default globalSetup;