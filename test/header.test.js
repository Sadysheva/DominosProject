const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/homePage');
const ProfilePage = require('../pageobjects/profile.page');
const Header = require('../pageobjects/pageComponents/header');
const forEach = require('mocha-each');
const allureReporter = require('@wdio/allure-reporter').default;

describe('Header', () => {
    it('choose English language', async () => {
        allureReporter.addDescription('Переключение на английский язык. Проверка наличия кнопки Log in');
        await LoginPage.navigate();
        await Header.btnChooseLanguage.click();
        await Header.fieldEnglishLanguage.click();
        await expect(LoginPage.btnLogInInEnglish).toExist();

    });

    it('check phone number', async () => {
        allureReporter.addDescription('Проверка ссылки номера телефона,корректность номера')
        await LoginPage.navigate();
        await expect(Header.linkPhoneNumber).toHaveAttribute('href', 'tel:7717');
    });

    forEach([
        ['/pizza', 'Заказать пиццу с бесплатной и быстрой доставкой, доставка еды - горячие большие и маленькие пиццы дешево | Domino’s Pizza'],
        ['/wings', 'Заказать горячие блюда из курицы с доставкой в Минске | Domino’s Pizza'],
        ['/potato', 'Domino’s Pizza - бесплатная доставка пиццы на дом за 30 минут, онлайн оплата на сайте | телефон 7717'],
        ['/gsalad', 'Заказать свежие салаты с бесплатной доставкой в Минске | Domino’s Pizza'],
        ['/starter', 'Заказать сладкие десерты с доставкой в Минске | Domino’s Pizza'],
        ['/drinks', 'Заказать холодные напитки с доставкой в Минске | Domino’s Pizza'],
        ['/sauce', 'Заказать соусы для пиццы с доставкой в Минске | Domino’s Pizza'],
    ])
        .it('check title link %j', async (link, expected) => {
            allureReporter.addDescription('Переход по ссылке в Header. Проверка title страницы')
            await LoginPage.navigate();
            await browser.$(`div.composed-navigation .horizontal-menu__list [href="${link}"]`).click();
            await expect(browser).toHaveTitle(expected);
        });
});



