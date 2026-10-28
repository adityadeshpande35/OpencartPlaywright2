import { test, expect } from '@playwright/test';


test.beforeEach(async() =>
{
    console.log("this is before each ");
})

test.beforeAll(async() =>
{
    console.log("this is before all ");
})


test("test1", async ({  }) => {

    console.log("this is test1");

})


test("test2", async ({  }) => {

    console.log("this is test2");

})




test("test3", async ({  }) => {

    console.log("this is test3");

})
test("test4", async ({  }) => {

    console.log("this is test4");

})


test.afterAll(async() =>
{
    console.log("this after all ");
})

test.afterEach(async() =>
{
    console.log("this after each ");
})
