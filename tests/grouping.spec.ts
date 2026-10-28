import { test, expect } from '@playwright/test';




test.describe('group1', () => {
test("test1", async ({  }) => {

    console.log("this is test1");

})


test("test2", async ({  }) => {

    console.log("this is test2");

})

})
test.describe('group2', () => {

test("test3", async ({  }) => {

    console.log("this is test3");

})
test("test4", async ({  }) => {

    console.log("this is test4");

})

})