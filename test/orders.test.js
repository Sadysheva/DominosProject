const { expect } = require('chai');
const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/homePage');
const ProfilePage = require('../pageobjects/profile.page');
const Header = require('../pageobjects/pageComponents/header');
const PizzaPage = require('../pageobjects/pizza.page');
const Busket = require('../pageobjects/busket.page');
const Salate = require('../pageobjects/salatePage');
const Drinks = require('../pageobjects/drinksPage');
const allureReporter = require('@wdio/allure-reporter').default;

describe('Orders', () => {
    it('order one default pizza from product card', async () => {
        allureReporter.addDescription('Добавление в корзину МитЧиз пиццы из карточки продукта.Проверка наличия кнопки "измененить количество" на карточке продукта');
        await LoginPage.navigate();
        await Header.btnPizza.click();
        await PizzaPage.pizzaMitChiz.click();
        await PizzaPage.btnToTheBusketFromProductCard.click();
        expect(await PizzaPage.btnChangeNumberOfPizzasOnProductCard.isExisting()).to.be.true;

    });

    it('order one default pizza from pizza page', async () => {
        allureReporter.addDescription('Добавление в корзину МитЧиз пиццы со страницы Пицца. Проверка наличиня кнопки "изменить количество');
        await LoginPage.navigate();
        await Header.btnPizza.click();
        await PizzaPage.btnToTheBusketFromPizzaPage.click();
        expect(await PizzaPage.btnChangeNumberOfMitChisPizzasOnPizzaPage.isExisting()).to.be.true;
    });

    it('order one big mitchiz pizza from pizza page', async () => {
        allureReporter.addDescription('Добавление в корину одной большой МитЧиз пиццы. Проверка ее наличия в корзине');
        await LoginPage.navigate();
        await Busket.deleteAllProductsFromTheBusket();
        await PizzaPage.mediumSizeOfMitChizPizzaFromDropDownMenyDefaul.click();
        await PizzaPage.bigSizeOfMitChizPizzaFromDropDownMeny.click();
        await PizzaPage.btnToTheBusketFromPizzaPage.click();
        expect(await Busket.numberOfOrderedPizzasInTheBusket.getText()).to.contain('1');
    });

    it('order two the same defaul pizzas from pizza page', async () => {
        allureReporter.addDescription('Добавление в корзину двух одинаковых пицц. Проверка,что сумма в корзине соответствует стоимости одной пиццы умноженной на 2');
        await LoginPage.navigate();
        await Header.btnPizza.click();
        await Busket.deleteAllProductsFromTheBusket();
        await PizzaPage.btnToTheBusketFromPizzaPage.click();
        await PizzaPage.btnToIncreaseNumberOfMitChizPizza.click();
        let str = (await PizzaPage.fieldOfPriceMitChizPizza.getText()).toString();
        let price = parseFloat(str);
        expect(await Busket.totalOrderPrice.getText()).to.contain((price * 2).toString());

    });

    it('order all pizzas on the pizza page', async () => {
        allureReporter.addDescription('Добавление в корзину всех пицц на странице Пицца. Проверка отсуствия кнопки "В корзину" на странице');
        await LoginPage.navigate();
        await Header.btnPizza.click();
        await Busket.deleteAllProductsFromTheBusket();
        while (await PizzaPage.allBtnsToTheBusket.isExisting()) {
            await PizzaPage.allBtnsToTheBusket.click();
        };
        expect(await PizzaPage.allBtnsToTheBusket.isExisting()).to.be.false;
    });

    it('order one pizza one salate one drink', async () => {
        allureReporter.addDescription('Добавление в корзину одной пиццы по умолчания, одного салата Цезарь, напитка Кока-кала 1л. Проверка иконки с количеством товаров.Проверка наличия 3х конкретных товаров в корзине.');
        await LoginPage.navigate();
        await Busket.deleteAllProductsFromTheBusket();
        await Header.btnPizza.click();
        await PizzaPage.btnToTheBusketFromPizzaPage.click();
        await Header.btnSalate.click();
        await Salate.btnToThrBusketCesarSalate.click();
        await Header.btnDrinks.click();
        await Drinks.btnToThrBusketCocaCola1L.click();
        expect(await Busket.numberOfOrderedPizzasInTheBusket.getText()).to.contain('3');
        await Busket.btnMiniBusket.click();
        (await Busket.arrayProductsInTheBusket.forEach(async element => {
            expect(await element.getText()).to.contain.oneOf(['Мит&Чиз', 'Салат Цезарь', 'Кока-Кола 1 л'])
        }));
    });

    it('delete all pizzas', async () => {
        allureReporter.addDescription('Удаление из корзины всех пицц добавленных со страницы Пицца. Проверка, что сумма товаров в корзине равно нулю');
        await LoginPage.navigate();
        await Busket.deleteAllProductsFromTheBusket();
        await Header.btnPizza.click();
        while (await PizzaPage.allBtnsToTheBusket.isExisting()) {
            await PizzaPage.allBtnsToTheBusket.click();
        };
        await Busket.deleteAllProductsFromTheBusket();
        expect(await Busket.fieldSummOfTheOrder.getText()).to.contain('0 руб.');

    });
});