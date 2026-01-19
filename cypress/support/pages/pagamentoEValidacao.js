import { faker } from '@faker-js/faker';

const BOTAO_CHECKOUT = '[data-test="checkout"]'
const INPUT_NAME     = 'input#name'
const INPUT_EMAIL    = 'input#email'
const CHECK_PROMO    = 'input#promotion'
const BTN_SUBMIT     = 'button#submit-payment'
const MSG_SUCESSO    = '.snackbar.success'

class CheckoutPage {
    
    preencherCheckoutEFinalizar() {
        Cypress.env('userName', faker.person.fullName());
        Cypress.env('userEmail', faker.internet.email());

        cy.get(BOTAO_CHECKOUT).click();
        
        cy.get(INPUT_NAME).type(Cypress.env('userName'));
        cy.get(INPUT_EMAIL).type(Cypress.env('userEmail'));
        
        cy.get(CHECK_PROMO).check();
        cy.get(BTN_SUBMIT).click();
    }

    validarCompraSucesso() {
        cy.get(MSG_SUCESSO).should('be.visible')
        cy.get(MSG_SUCESSO).should('have.text', 'Thanks for your purchase. Please check your email for payment.');
    }
}

export default new CheckoutPage();