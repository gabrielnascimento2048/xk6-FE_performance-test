import { check, sleep } from 'k6';
import { chromium } from 'k6/x/browser';

export default function () {
    const browser = chromium.launch({ headless: false });
    const page = browser.newPage();

    page
        .goto('https://test.k6.io/my_messages.php', { waitUntil: 'networkidle' })
        .then(() => {
            page.locator('input[name="login"]').type('test_user');
            page.locator('input[name="password"]').type('1234');

            return Promise.all([
                page.waitForNavigation(),
                page.locator('input[type="submit"]').click(),
            ]).then(() => {
                check(page, {
                    'header': page.locator('h2').textContent() == 'Welcome, test_user!',
                });
                check(page, {
                    'Logout button exist': page.locator('form [value="Logout"]').isVisible("Logout"),
                });
            });
        }).finally(() => {
            page.locator('form [value="Logout"]').click(),
            page.close();
            browser.close();
        });
}
