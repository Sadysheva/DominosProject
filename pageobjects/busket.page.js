const Page = require('./page');

class Busket extends Page {
    get fieldInMitiBusketOfSizeAndBordkidOfPizza() {
        return $('//div[contains(text(),"Хот-Дог борт, Большая")]')
    }

    get numberOfOrderedPizzasInTheBusket() {
        return $('[class*="cart-icon__badge"]')
    }
    get totalOrderPrice() {
        return $('.cart-button__button-text')
    }
    get arrayProductsInTheBusket() {
        return $$('.order-products.cart-button__mini-bag-products .product-card__title')
    }
    get btnMiniBusket(){
        return $('.cart-button')
    }
    get btnDeletePizzaFromTheBusket(){
        //return $('.cart-button__mini-bag .jss40')
        return $('button[class*=product-card__button-close]');
    }
    get fieldSummOfTheOrder(){
        return $('.cart-button__mini-bag-price')
    }
async deleteAllProductsFromTheBusket (){
    await this.btnMiniBusket.click();
    while (await this.btnDeletePizzaFromTheBusket.isExisting()) {
        await this.btnDeletePizzaFromTheBusket.click();
    };
}

}

module.exports = new Busket();