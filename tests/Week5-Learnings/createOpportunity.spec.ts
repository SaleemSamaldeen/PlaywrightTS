import test from "@playwright/test";
import loginData from "../../test-data/loginData.json";

let bearerToken: any;

test('Generate Token', async({request}) => {
    const response = await request.post(loginData.generateTokenURL,
    {
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            'Connection': 'keep-alive'
        },
        form:{
            "grant_type" :"password",
            "client_id" : loginData.client_id,
            "client_secret": loginData.client_secret,
            "username": loginData.username,
            "password": loginData.password
        }
    });
    const responseBody = await response.json();
    console.log(`Response status code: ${response.status()}`);
    console.log(responseBody);
    bearerToken = 'Bearer ' + responseBody.access_token;
    console.log(`Bearer token: ${bearerToken}`);
});

test('Create opportunity using Generated Token', async({request}) => {
    const createOpportunity = await request.post(loginData.createOpportunityURL,
    {
        headers:{
            'Connection': 'keep-alive',
            'Authorization': bearerToken
        },
        data:{
            "CloseDate" :"2023-12-05",
            "Name": "Test Leaf api from playwright",
            "StageName": "Prospecting",
            "Type": "Creating a ooportunity"
        }
    });
    const responseBody = await createOpportunity.json();
    console.log(`Response status code: ${createOpportunity.status()}`);
    console.log(`created opportunity id: ${responseBody.id}`);
});


