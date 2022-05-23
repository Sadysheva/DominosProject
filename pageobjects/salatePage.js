const Page = require('./page');

class Salate extends Page {
    get btnToThrBusketCesarSalate(){
        return $('div[data-code="CSRSLD"] button.custom-button.custom-button--secondary.custom-button--size-medium');
    }
}



module.exports = new Salate();