const Page = require('./page');

class ProfilePage extends Page {

    get btnExit() {
        return $('.profile__title-link.active');
    }
    get fieldName() {
        return $('.profile__group.profile__group--user-info input[type="text"]')
    }
    get btnSave() {
        return $('.custom-button.custom-button--secondary.custom-button--full-width.custom-button--size-medium')
    }
    get bannerSuccess() {
        return $('.notification__content')
    }

    get fieldStreet() {
        return $('div.app-root:nth-child(3) div.app-scenes.app-scenes--theme-default:nth-child(2) div.scene.scene-profile div.scene-content div.profile div.profile__content div.profile__content-primary form.profile__form div.profile__group.profile__group--user-streets:nth-child(3) div.profile__group-content div.custom-field-row.custom-field-row--direction-column div.user-streets div.custom-modal.add-delivery-address.custom-modal--size-fullscreen.custom-modal--padding-default div.custom-modal__content-holder div.custom-modal__content div.add-delivery-address__content div.delivery-address__form-wrapper form.delivery-address__form div.custom-field-row.custom-field-row--direction-column > div.custom-field-text.custom-field-text--disabled.custom-field-text--full-width.custom-field-text--size-medium.custom-field-text--margin-medium.custom-field-text--description-default:nth-child(1)')
    }

    get btnAddAdress() {
        let test1 = "document.querySelector('.custom-button.custom-button--primary.custom-button--size-medium.user-streets__button.user-streets__button--add .custom-button__content-children').click()";
        return test1
    }

    get inputStreet() {
        return $('div.app-root:nth-child(3) div.app-scenes.app-scenes--theme-default:nth-child(2) div.scene.scene-profile div.scene-content div.profile div.profile__content div.profile__content-primary form.profile__form div.profile__group.profile__group--user-streets:nth-child(3) div.profile__group-content div.custom-field-row.custom-field-row--direction-column div.user-streets div.custom-modal.add-delivery-address.custom-modal--size-fullscreen.custom-modal--padding-default div.custom-modal__content-holder div.custom-modal__content div.add-delivery-address__content div.delivery-address__form-wrapper div.custom-modal.search-street__modal.custom-modal--size-large.custom-modal--padding-default div.custom-modal__content-holder div.custom-modal__content div.search-street__modal-content div.custom-field-text.custom-field-text--full-width.custom-field-text--size-medium.custom-field-text--margin-medium.custom-field-text--description-default > input.custom-field-text__input')
    }

    get inputHomeNumber() {
        return $('div.app-root:nth-child(3) div.app-scenes.app-scenes--theme-default:nth-child(2) div.scene.scene-profile div.scene-content div.profile div.profile__content div.profile__content-primary form.profile__form div.profile__group.profile__group--user-streets:nth-child(3) div.profile__group-content div.custom-field-row.custom-field-row--direction-column div.user-streets div.custom-modal.add-delivery-address.custom-modal--size-fullscreen.custom-modal--padding-default div.custom-modal__content-holder div.custom-modal__content div.add-delivery-address__content div.delivery-address__form-wrapper form.delivery-address__form div.custom-field-row.custom-field-row--direction-column div.custom-field-text.custom-field-text--full-width.custom-field-text--size-medium.custom-field-text--margin-medium.custom-field-text--description-default:nth-child(2) > input.custom-field-text__input')
    }

    get btnSaveAdress() {
        return $('.custom-button.custom-button--primary.custom-button--full-width.custom-button--size-large')
    }

    get bannerSaveAdressSuccess() {
        return $('.notification__banner.notification__banner--default')
    }

    get closeBannerSuccess() {
        return $('.custom-button.custom-button--transparent.custom-button--no-paddings.custom-button--size-small.custom-modal__close-button')
    }

    get deleteTimiryazevaAdress() {
        return $('//div[contains(text(),"МИНСК, ТИМИРЯЗЕВА УЛ.")]/../../../div[@class="custom-list__actions"]')
    }

    get btnAgreeDeleteAdress() {
        return $('button.custom-button.custom-button--secondary.custom-button--full-width.custom-button--size-medium[type="button"]') 
    }

    get expectAdressTimiryazeva() {
        return $('//div[contains(text(),"МИНСК, ТИМИРЯЗЕВА УЛ.")]')
    }

    get fieldNewPassword (){
        return $('div.custom-field-row.custom-field-row--direction-column.profile__group-content div.custom-field-text.custom-field-text--full-width.custom-field-text--size-medium.custom-field-text--margin-medium.custom-field-text--description-default:nth-child(1) > input.custom-field-text__input')
    }

    get fieldRepeatPassword(){
        return $('div.custom-field-row.custom-field-row--direction-column.profile__group-content div.custom-field-text.custom-field-text--full-width.custom-field-text--size-medium.custom-field-text--margin-medium.custom-field-text--description-default:nth-child(2) > input.custom-field-text__input')
    }

    get bannerNewPasswordSuccessfullySaved(){
       return $('.notification__banner.notification__banner--default') 
    }

    get fieldWithTextDeliveryAdress(){
        return $('//h3[contains(text(),"Адрес доставки")]')
    }

    async createAdress(street, housenumber) {
        await browser.pause(3000);
        await browser.execute(this.btnAddAdress);
        await this.fieldStreet.click();
        await this.inputStreet.click();
        await this.inputStreet.setValue(street);
        await browser.pause(3000);
        await browser.keys('Enter');
        await this.inputHomeNumber.setValue(housenumber);
        await this.btnSaveAdress.click();
    }

    async changePassword(newpassword,repeatpassword){
        await this.fieldNewPassword.scrollIntoView();
        await this.fieldNewPassword.click();
        await this.fieldNewPassword.setValue(newpassword);
        await browser.pause(1000);
        await this.fieldRepeatPassword.click();
        await this.fieldRepeatPassword.setValue(repeatpassword);
        await browser.pause(1000);
        await expect (await this.fieldNewPassword).toHaveAttrContaining('value',newpassword);
        await expect (await this.fieldRepeatPassword).toHaveAttrContaining('value',repeatpassword);
        await this.btnSave.click();
    }
}




module.exports = new ProfilePage();
