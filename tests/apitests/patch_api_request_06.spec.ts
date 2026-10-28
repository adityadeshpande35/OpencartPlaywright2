/*

Pre-requisits:
 data:json.file
 create token
1) Create a booking (Post)--->bookingId
2) partial Update  booking (Patch) //required token

*/

import{test,expect} from '@playwright/test';
import fs from 'fs';

function readJson(filePath:string)
{
   return JSON.parse(fs.readFileSync(filePath,'utf-8'));
}

test('partial Update booking (Patch)',async ({request}) => {

    const requestBody=readJson('testdata/post_request_body.json');
    const createResponse=await request.post('/booking',{data:requestBody});
    expect(createResponse.ok()).toBeTruthy();

    const responseBody=await createResponse.json();
    const bookingId=responseBody.bookingid;
    console.log("Booking id=====>",bookingId);

    //2) partial Update the booking (Patch) //required token

    //token creation
    const tokenrequestBody=readJson('testdata/token_request_body.json');
    const tokenResponse=await request.post('/auth',{data:tokenrequestBody});
    expect(tokenResponse.ok()).toBeTruthy();

    const tokenResponseBody=await tokenResponse.json();
    const token=tokenResponseBody.token;
    console.log("Token=====>",token);

    //sending update(patch)
const patchRequestBody=readJson('testdata/patch_request_body.json');
const partialUpdateResponse=await request.patch(`/booking/${bookingId}`,
    
{
        headers:{"Cookie":`token=${token}`},
        data:patchRequestBody
    }
);
expect(partialUpdateResponse.ok()).toBeTruthy();
expect(partialUpdateResponse.status()).toBe(200);

const updateResponseBody=await partialUpdateResponse.json();
console.log("Updated response body=====>",updateResponseBody);
console.log("Booking details updated successfully");





})
