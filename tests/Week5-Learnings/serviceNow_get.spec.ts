import test from "@playwright/test";

test('Fetch Incident', async({request}) => {
    const responseBody = await request.get('https://dev205797.service-now.com/api/now/table/incident/INC0010062',
    {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Basic YWRtaW46VGVzdGxlYWZAMTIz'
        },
    });
    console.log(`Response status code: ${responseBody.status()}`);
    console.log(`Response body is ${JSON.stringify(responseBody)}`);
});