import { chromium } from 'k6/x/browser';

export default function () {
  const browser = chromium.launch({ headless: false });
  const page = browser.newPage();

  page
    .goto('https://test.k6.io/', { waitUntil: 'networkidle' })
    .then(() => {
      page.screenshot({ path: 'screenshot.png' });
    })
    .finally(() => {
      page.close();
      browser.close();
    });
}
