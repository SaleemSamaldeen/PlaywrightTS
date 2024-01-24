import test from "@playwright/test";

test('Create Incident', async({request}) => {
    const responseBody = await request.post('https://dev205797.service-now.com/api/now/table/incident',
    {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Basic YWRtaW46VGVzdGxlYWZAMTIz'
        },
        data: {
            'Short-description': 'REST API from Playwright'
        }
    });
    console.log(`Response status code: ${responseBody.status()}`);
    console.log(`Response Body: ${await responseBody.json()}`);
    console.log(`Response body is ${JSON.stringify(responseBody)}`);
    const body = await responseBody.json();
    console.log(`System id: ${body.result.sys_id}`);
    console.log(`The incident number is ${body.result.task_effective_number}`);
});
