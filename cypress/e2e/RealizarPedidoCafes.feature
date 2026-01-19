#language: pt

Funcionalidade: Fluxo completo do usuario no Coffee Cart

  Cenário: Realizar pedido com promoção, validação de valores e finalização da compra
    Dado que o usuário acessa a página inicial do Coffee Cart
    Quando o usuário seleciona 3 tipos de cafés diferentes
    E aceita a oferta do Mocha no carrinho
    E verifica se os itens e seus valores estão corretos no carrinho
    E remove um item da lista de compras
    E realiza o pagamento através do checkout
    Então o sistema confirma que a compra foi concluída com sucesso


