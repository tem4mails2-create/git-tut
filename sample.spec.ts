import {test}  from "@playwright/test";

test("sample test", async ({page}) =>{

    await page.goto("https://www.google.com/");
    console.log(await page.title());
    



})