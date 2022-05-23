
const Page = require('./page');

class HomePage extends Page {
    get fieldBonus () {
        return $('//span[contains(text(),": 0")]');
    }
    get btnProfile(){
        return $('div.authorization-cta .custom-button__content-children')
    }
    
}

module.exports = new HomePage();
