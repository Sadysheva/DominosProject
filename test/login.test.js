const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/homePage');
const ProfilePage = require('../pageobjects/profile.page');
const allureReporter = require('@wdio/allure-reporter').default;

describe('Log in', () => {
    it('login with valid credentials', async () => {
        allureReporter.addDescription('Авторизация с valid credentials. Проверка наличия поля Бонус');
        await LoginPage.navigate();
        await LoginPage.login();
        await expect(await HomePage.fieldBonus).toExist();

    });
    it('login with INvalid credentials', async () => {
        allureReporter.addDescription('Авторизация с INvalid credentials. Проверка наличия окна ошибки')
        await LoginPage.navigate();
        await LoginPage.login('dominos.wdio@gmail.com', 'pathisclear12');
        await browser.pause(3000);
        expect(await LoginPage.fieldWrongCredentials).toExist();
    });
    it('log out', async () => {
        allureReporter.addDescription('Выход из профиля покупателя. Проверка наличия кнопки "Войти"');
        await LoginPage.navigate();
        await LoginPage.login();
        await HomePage.btnProfile.click();
        await ProfilePage.btnExit.click();
        await expect(await LoginPage.btnLogIn).toExist();
    });

});
