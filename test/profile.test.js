const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/homePage');
const ProfilePage = require('../pageobjects/profile.page');
const Header = require('../pageobjects/pageComponents/header');
const allureReporter = require('@wdio/allure-reporter').default;

describe('Profile', () => {
    it('change customs name', async () => {
        allureReporter.addDescription('Изменение имени пользователя в Профиле. Проверка наличия баннера "Имя успешно изменено"');
        await LoginPage.navigate();
        await LoginPage.login();
        await HomePage.btnProfile.click();
        await ProfilePage.fieldName.click();
        await ProfilePage.fieldName.clearValue();
        let id = Math.floor(Math.random() * 100);
        await ProfilePage.fieldName.setValue('Misha' + id);
        await browser.pause(1000);
        await ProfilePage.btnSave.scrollIntoView();
        await browser.pause(1000);
        await ProfilePage.btnSave.click();
        await expect(ProfilePage.bannerSuccess).toExist();


    });
    it('add adress', async () => {
        allureReporter.addDescription('Добавление адреса доставки. Проверка баннера "Адрес успешно добавлен"');
        await LoginPage.navigate();
        await LoginPage.login();
        await HomePage.btnProfile.click();
        await ProfilePage.createAdress('Тимирязева', '1');
        await expect(ProfilePage.bannerSuccess).toExist();

    });
    it('delete adress', async () => {
        allureReporter.addDescription('Удаление конкретного адреса из списка адресов. Проверка отсутсвия конкретного адреса в списке');
        await LoginPage.navigate();
        await LoginPage.login();
        await HomePage.btnProfile.click();
        await browser.pause(1000);
        await ProfilePage.fieldWithTextDeliveryAdress.scrollIntoView();
        if (! await ProfilePage.deleteTimiryazevaAdress.isExisting()) {
            await ProfilePage.createAdress('Тимирязева', '1');
            await ProfilePage.closeBannerSuccess.click();
        }
        while (await ProfilePage.deleteTimiryazevaAdress.isExisting()) {
            await ProfilePage.deleteTimiryazevaAdress.click();
            if (await ProfilePage.btnAgreeDeleteAdress.isExisting()) {
                await ProfilePage.btnAgreeDeleteAdress.click();
            };
        }
        await expect(ProfilePage.expectAdressTimiryazeva).not.toExist();
    });

    it('change password', async () => {
        allureReporter.addDescription('Изменение текущего пароля. Проверка успешности изменеия. Вход под новым паролем. проверка успешности входа. Изменения пароля на первоначальный. Проверка успешности входа');
        await LoginPage.navigate();
        await LoginPage.login();
        await HomePage.btnProfile.click();
        await ProfilePage.changePassword('dominosNew123', 'dominosNew123');
        await expect(ProfilePage.bannerSuccess).toExist();
        await ProfilePage.closeBannerSuccess.click();
        await Header.dominosLogo.scrollIntoView();
        await browser.pause(1000);
        await ProfilePage.btnExit.click();
        await browser.pause(2000);
        await LoginPage.login('dominos.wdio@gmail.com', 'dominosNew123'); 
        await expect(HomePage.fieldBonus).toExist();
        await HomePage.btnProfile.click();
        await ProfilePage.changePassword('pathisclear123', 'pathisclear123');
        await ProfilePage.closeBannerSuccess.click();
        await Header.dominosLogo.scrollIntoView();
        await ProfilePage.btnExit.click();
        await LoginPage.login();
        await expect(HomePage.fieldBonus).toExist();
    })
    it('input not the same password in "repeat password" field', async () => {
        allureReporter.addDescription('Ввода разнных паролей при изменеии пароля. Проверка, что кнопка "Сохранить" недоступна');
        await LoginPage.navigate();
        await LoginPage.login();
        await HomePage.btnProfile.click();
        await ProfilePage.changePassword('dominosNew123', 'dominosNew13');
        await expect(ProfilePage.btnSave).toBeDisabled();
    });
});