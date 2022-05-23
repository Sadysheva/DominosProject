const Page = require('./page');

class PizzaPage extends Page {

    get pizzaMitChiz() {
        return $('.product-card__media-wrapper[href="/pizza/mchs"]')
    }
    get btnToTheBusketFromProductCard() {
        return $('div.product-card.product-card--horizontal.product-card--media-full.product-card--details.product-details__product-card div.product-card__content div.product-card__modification-summary div.product-card__actions > button.custom-button.custom-button--secondary.custom-button--size-medium')
    }

    get btnChangeNumberOfPizzasOnProductCard() {
        return $('div[class*="product-card--horizontal"][data-code="MCHS"] button.product-counter__action.product-counter__action--encrease')
    }
    get btnToTheBusketFromPizzaPage() {
        return $('div.product-card.product-card--vertical[data-code="MCHS"] .product-card__actions')
    }
    get btnChangeNumberOfMitChisPizzasOnPizzaPage() {
        return $('div.product-card.product-card--vertical[data-code="MCHS"] .product-counter__content')
    }
    get mediumSizeOfMitChizPizzaFromDropDownMenyDefaul() {
        return $('.product-card.product-card--vertical[data-code="MCHS"] .custom-select__option[value="product.pizza.diameter.30"]')
    }
    get bigSizeOfMitChizPizzaFromDropDownMeny() {
        return $('.product-card.product-card--vertical[data-code="MCHS"] .custom-select__option[value="product.pizza.diameter.36"]')
    }
    get btnToIncreaseNumberOfMitChizPizza() {
        return $('.product-card.product-card--vertical[data-code="MCHS"] button.product-counter__action.product-counter__action--encrease[data-action="increase"]')
    }
    get fieldOfPriceMitChizPizza() {
        return $('.product-card.product-card--vertical[data-code="MCHS"] p.product-card__modification-info-price')
    }
    get arrayAllPizza() {
        return $('div.product-card.product-card--vertical')
    }
    get allBtnsToTheBusket() {
        return $('div.product-card.product-card--vertical .custom-button.custom-button--secondary.custom-button--size-medium')
    }
}

module.exports = new PizzaPage();
