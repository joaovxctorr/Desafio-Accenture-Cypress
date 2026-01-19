const ESPRESSO           = '[data-cy="Espresso"]'
const ESPRESSO_CON_PANNA = '[data-cy="Espresso-Con Panna"]'
const MACCHIATO          = '[data-cy="Espresso-Macchiato"]'
const CAPPUCCINO         = '[data-cy="Cappuccino"]'
const MOCHA              = '[data-cy="Mocha"]'
const FLAT_WHITE         = '[data-cy="Flat-White"]'
const AMERICANO          = '[data-cy="Americano"]'
const LATTE              = '[data-cy="Cafe-Latte"]'
const BREVE              = '[data-cy="Cafe-Breve"]'

const PROMO_MODAL = '.promo'
const BTN_YES     = 'button.yes'
const CART_BUTTON = 'a[href="/cart"]'

const todosOsCafes = [ESPRESSO, ESPRESSO_CON_PANNA, MACCHIATO, CAPPUCCINO, MOCHA, FLAT_WHITE, AMERICANO, LATTE, BREVE];

class CoffeePage {
   
    acessarHome() {
        cy.visit('/')
    }

    selecionarTresCafesAleatorios() { 
        const cafesSorteados = Cypress._.sampleSize(todosOsCafes, 3);
        cafesSorteados.forEach(cafe => { 
            cy.get(cafe).click();
        });

        Cypress.env('cafesSelecionados', cafesSorteados);
        cy.log('Cafés selecionados:', cafesSorteados);
    } 

    aceitarOfertaMocha() { 
        cy.get(PROMO_MODAL).should('be.visible')
        cy.get(PROMO_MODAL).should('contain', "It's your lucky day! Get an extra cup of Mocha for $4.");
        cy.get(BTN_YES).should('be.visible').click();
        cy.get(PROMO_MODAL).should('not.exist');
    }

    irParaCarrinho() {
        cy.get(CART_BUTTON).click();
        cy.url().should('include', '/cart');
    }
}

export default new CoffeePage();