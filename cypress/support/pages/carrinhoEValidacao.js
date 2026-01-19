const ITENS_CARRINHO = 'ul:not(.cart-preview) .list-item';
const BTN_REMOVER    = 'button.delete';

const VALORES_CAFES = {
    'Espresso': '$10.00',
    'Espresso-Macchiato': '$12.00',
    'Cappuccino': '$19.00',
    'Mocha': '$8.00',
    'Flat-White': '$18.00',
    'Americano': '$7.00',
    'Cafe-Latte': '$16.00',
    'Espresso-Con Panna': '$14.00',
    'Cafe-Breve': '$15.00',
    'Discounted Mocha': '$4.00'
};

class CartPage {
    
    validarItensNoCarrinho() {
        const cafesSelecionados = Cypress.env('cafesSelecionados');
        
        cafesSelecionados.forEach(seletor => {
            const capturarTexto = seletor.match(/"([^"]+)"/)[1].replace(/-/g, ' ');
            cy.get(ITENS_CARRINHO).contains(capturarTexto).should('be.visible');
        });

        cy.contains(ITENS_CARRINHO, '(Discounted) Mocha').should('be.visible');
    }

    validarPrecosNoCarrinho() {
        const cafesSelecionados = Cypress.env('cafesSelecionados');

        cafesSelecionados.forEach(seletor => {
            const capturarTexto = seletor.match(/"([^"]+)"/)[1];
            const precoEsperado = VALORES_CAFES[capturarTexto];
            const ajusteNomes = capturarTexto.replace(/-/g, ' ');

            cy.get(ITENS_CARRINHO)
                .contains(new RegExp(`^${ajusteNomes}$`))
                .parents('.list-item') 
                .within(() => {
                    cy.get('div').eq(-2).should('have.text', precoEsperado);
                });
        });

        const precoBrinde = VALORES_CAFES['Discounted Mocha'];
        cy.contains(ITENS_CARRINHO, '(Discounted) Mocha')
            .within(() => {
                cy.get('div').eq(-2).should('have.text', precoBrinde);
            });
    }

    removerItemAleatorio() {
        cy.get(ITENS_CARRINHO).find(BTN_REMOVER).then($buttons => {
            const randomButton = Cypress._.sample($buttons.toArray());
            cy.wrap(randomButton).click();
        });
    }
}

export default new CartPage();