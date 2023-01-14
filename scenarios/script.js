import { chromium } from 'k6/x/browser';
import { check } from 'k6';
import http from 'k6/http';

export const options = {
  scenarios: {
    messages: {
      executor: 'constant-vus',
      exec: 'browser',
      vus: 1,
      duration: '10s',
    },
    news: {
      executor: 'constant-vus',
      exec: 'news',
      vus: 20,
      duration: '1m',
    },
  },
};

export function browser() {
  const browser = chromium.launch({ headless: false });
  const page = browser.newPage();

  page
    .goto('https://test.k6.io/browser.php', { waitUntil: 'networkidle' })
    .then(() => {
      page.locator('#checkbox1').check();

      check(page, {
        'checkbox is checked': (p) =>
          p.locator('#checkbox-info-display').textContent() === 'Thanks for checking the box',
      });
    })
    .finally(() => {
      page.close();
      browser.close();
    });
}

export function news() {
  const res = http.get('https://test.k6.io/news.php');

  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}
