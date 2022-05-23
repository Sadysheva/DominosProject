const Page = require('../page');

class Header extends Page {
    get dominosLogo() {
        return $('//body/div[@id="app-root"]/div[1]')
    }
    get btnChooseLanguage() {
        return $('div.custom-select.custom-select--border-full.custom-select--margin-none.header-desktop__language-select.custom-select--full-width:nth-child(1) div.jss6.jss8.jss12.custom-select__select-mui div.jss1 > div.jss2.custom-select__select.jss3.jss15.jss18:nth-child(1)')
    }
    get fieldEnglishLanguage() {
        return $('//li[contains(text(),"English")]')
    }
    get linkPhoneNumber() {
        return $('.header-desktop__info--phone-link')
    }
    get btnPizza() {
        return $('div.composed-navigation .horizontal-menu__list [href="/pizza"]');
    }
    get btnSalate() {
        return $('div.composed-navigation .horizontal-menu__list [href="/gsalad"]');
    }
    get btnDrinks() {
        return $('div.composed-navigation .horizontal-menu__list [href="/drinks"]')
    }
    get btnChicken(){
        return $('div.composed-navigation .horizontal-menu__list [href="/wings"]')
    }
    get btnPotatoes(){
        return $('div.composed-navigation .horizontal-menu__list [href="/potato"]')
    }
    get btnBread(){
        return $('div.composed-navigation .horizontal-menu__list [href="/bread"]')
    }
    get btnDesserts(){
        return $('div.composed-navigation .horizontal-menu__list [href="/starter"]')
    }
    get btnSause(){
        return $('div.composed-navigation .horizontal-menu__list [href="/sauce"]');
    }

}
module.exports = new Header();