const readlineSync = require('readline-sync');
const puppeteer = require('puppeteer');

async function robot () {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    const moedas = ['Dollar','Euro','Real','Reimimbi']
    const e1 = readlineSync.keyInSelect(moedas,'Escolha a moeda para converter');
    const e2 = readlineSync.keyInSelect(moedas,'Agora escolha a moeda para ser convertida');
    const urlMoeda = `https://www.google.com/search?q=${moedas[e1]}+para+${moedas[e2]}&oq=${moedas[e1]}+para+${moedas[e2]}&aqs=chrome..69i57j0l2j0i10l2j0j0i10l3j0.6858j1j7&sourceid=chrome&ie=UTF-8`;
    await page.goto(urlMoeda);

    const resul = await page.evaluate(() => {
        return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
    });

    console.log(`O valor atual do câmbio : 1 ${moedas[e1]} = ${resul} ${moedas[e2]} `);

    // await browser.close();
}
  
robot();