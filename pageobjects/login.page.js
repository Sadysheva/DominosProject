const homePage = require('./homePage');
const Page = require('./page');

class LoginPage extends Page {
    get btnSubmit() {
        return $('button[type="submit"]');
    }

    get closeBanner() {
        return $('button.jss38.jss31.modal__close');
    }

    get btnLogIn() {
        return $('.custom-button.custom-button--primary.custom-button--size-medium');

    }
    get btnLogInInEnglish() {
        return $('//span[contains(text(),"Log in")]');
    }

    get inputEmail() {
        return $('input[name="email"]');
    }

    get inputPassword() {
        return $('input[name="password"]');

    }
    get fieldWrongCredentials() {
        return $('.notification__banner.notification__banner--error');
    }

    async login(username = 'dominos.wdio@gmail.com', password = 'pathisclear123') {
        if (! await $('//span[contains(text(),": 0")]').isExisting()) {
        await this.btnLogIn.click();
        await this.inputEmail.setValue(username);
        await browser.pause(1000);
        await this.inputPassword.setValue(password);
        await browser.pause(1000);
        await this.btnSubmit.click();
    }
}

    async navigate() {
        await this.open();
        if(await this.closeBanner.isExisting()) {
            await this.closeBanner.click();
        }
    }

    open() {
        return super.open('');
    }
}

module.exports = new LoginPage();
