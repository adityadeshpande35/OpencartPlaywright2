/*

Test:create booking
Request Type: POST
Request body: Dynamic data using faker and luxon library
*/



import { test, expect } from '@playwright/test';
import {faker} from '@faker-js/faker';
import{DateTime} from 'luxon';

test("Create post request using dynamic data",async ({request}) => {

   //data genration using faker
const firstName=faker.person.firstName();
const lastName=faker.person.lastName();
const totalPrice=faker.number.int({min:100,max:5000});
const depositPaid=faker.datatype.boolean();
const checkInDate=DateTime.now().toFormat("yyyy-MM-dd");
const checkOutDate=DateTime.now().plus({days:5}).toFormat("yyyy-MM-dd");

const additionalNeeds="super bowls";

//request body(faker)
const requestBody={
    firstname:firstName,
    lastname:lastName,
    totalprice:totalPrice,
    depositpaid:depositPaid,
    bookingdates:{
        checkin:checkInDate,
        checkout:checkOutDate
    },
    additionalneeds:additionalNeeds,
}
  

    const response=await request.post("/booking",{data:requestBody});

   const responseBody=await response.json(); //extracted response
   console.log(responseBody);

   //validate status
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    //validate response body attributes
    expect(responseBody).toHaveProperty("bookingid");
    expect(responseBody).toHaveProperty("booking");
    expect(responseBody).toHaveProperty("booking.additionalneeds");


    //validate booking details
    const booking=responseBody.booking;

    expect(booking).toMatchObject({
        firstname:requestBody.firstname,
        lastname:requestBody.lastname,
        totalprice:requestBody.totalprice,
        depositpaid:requestBody.depositpaid,
        additionalneeds:requestBody.additionalneeds,
    });

    //validate booking dates(nested json object)

    expect(booking.bookingdates).toMatchObject({
        checkin:requestBody.bookingdates.checkin,
        checkout:requestBody.bookingdates.checkout
    });


})