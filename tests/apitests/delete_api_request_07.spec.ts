/*
1) create new booking
2) get booking
3) update booking
4) delete booking
*/


import{test,expect} from '@playwright/test';
import fs from 'fs';

//utility function to read json data from file

function readJson(filePath:string)
{
    return JSON.parse(fs.readFileSync(filePath,'utf-8'));
}

test('Delete booking(end-to-end)',async ({request}) => {

    //1) create new booking
    const postrequestbody=readJson('./testdata/post_request_body.json');
    const postresponse=await request.post("/booking",{data:postrequestbody});
    const postresponsebody=await postresponse.json();
    console.log(postresponsebody);
    const bookingid=postresponsebody.bookingid;
    console.log("Boooking is created...");
    console.log("Booking id is ===>",bookingid);

    //2) get booking
    const getresponse=await request.get(`/booking/${bookingid}`);
   const getresponsebody=await getresponse.json();
   console.log("Booking details are ....");
   console.log(getresponsebody);

   // 3) update booking

   //creating token
   const tokenrequestbody=readJson('./testdata/token_request_body.json');
    const tokenresponse=await request.post('/auth',{data:tokenrequestbody});
    const tokenresponsebody=await tokenresponse.json();
    const token=tokenresponsebody.token;
    
    console.log("Token is ===>",token);
 
    //sending put request
   const updateRequestBody=readJson('testdata/put_request_body.json');
   const updateResponse=await request.put(`/booking/${bookingid}`,
       
   {
           headers:{"Cookie":`token=${token}`},
           data:updateRequestBody
       }
   );
   
   
   const updateResponseBody=await updateResponse.json();
    console.log("Booking details updated successfully...");
   console.log(updateResponseBody);

   //4) delete booking
const deleteResponse=await request.delete(`/booking/${bookingid}`,
{
    headers:{"Cookie":`token=${token}`}
}
);
expect(deleteResponse.statusText()).toBe("Created");
expect(deleteResponse.status()).toBe(201);
console.log("Booking are deleted successfully...");
  

})