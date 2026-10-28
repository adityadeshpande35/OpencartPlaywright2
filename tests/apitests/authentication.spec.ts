/*

1)No Auth(public API)
2)Basic Auth/Preemptive Auth(username and password)
3)Bearer Token Auth
4)API key authentication

*/

import{test,expect} from '@playwright/test';

// 1)No Auth

test(`public api-No Auth`,async ({request}) => {
const response=await request.get("https://jsonplaceholder.typicode.com/posts/1");
const responseBody=await response.json();
console.log(responseBody);



})