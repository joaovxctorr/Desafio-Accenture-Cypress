import { Given, When, Then, defineStep as And } from '@badeball/cypress-cucumber-preprocessor';
import CoffeePage from '../pages/adicionarCafe.js';
import CartPage from '../pages/carrinhoEValidacao.js';
import CheckoutPage from '../pages/pagamentoEValidacao.js';

Given('que o usuário acessa a página inicial do Coffee Cart', () => {
    CoffeePage.acessarHome();
});

When('o usuário seleciona 3 tipos de cafés diferentes', () => {
    CoffeePage.selecionarTresCafesAleatorios();
});

And('aceita a oferta do Mocha no carrinho', () => {
    CoffeePage.aceitarOfertaMocha();
    CoffeePage.irParaCarrinho();
});

And('verifica se os itens e seus valores estão corretos no carrinho', () => {
    CartPage.validarItensNoCarrinho();
    CartPage.validarPrecosNoCarrinho();
});

And('remove um item da lista de compras', () => {
    CartPage.removerItemAleatorio();
});

And('realiza o pagamento através do checkout', () => {
    CheckoutPage.preencherCheckoutEFinalizar();
});

Then('o sistema confirma que a compra foi concluída com sucesso', () => {
    CheckoutPage.validarCompraSucesso();
}); 