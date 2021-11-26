import puppeteer from 'puppeteer';

try {
    (async () => {

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto('https://www.bilibili.com/', {waitUntil: 'networkidle0'});

        await page.screenshot({path: 'bilibili.png'});

        await browser.close();


    })();
} catch (e) {
    console.log(e);
}
