import { chromium } from 'k6/x/browser';
import { sleep } from 'k6';


export default function () {
  const browser = chromium.launch({ headless: false });
  const page = browser.newPage();

  page
    .goto('https://test.k6.io/browser.php')
    .then(() => {
      const button = page.locator("#counter-button");
      button.click();

      const checkbox = page.locator('#checkbox1');
      if (!checkbox.isChecked()) {
        checkbox.check();
      }

      const textInput = page.locator('#text1');
      textInput.fill("Hello world!");
      const inputValue = textInput.inputValue();
      console.log(inputValue);
      
      sleep(Math.random() * 4);

    })
    .finally(() => {
      page.close();
      browser.close();
    });
}
