const Page = require('./page');

class Drinks extends Page {
    get btnToThrBusketCocaCola1L(){
        return $('[data-code="KK1"] .custom-button.custom-button--secondary.custom-button--size-medium')
    }
}



module.exports = new Drinks();