/// <reference types = "cypress" />

describe('funcionalidade página de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('deve selecionar um produto da lista', () => {
        cy.get('[class= "product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()

    });

    it.only('deve adicionar um produto ao carrinho', () => {
        var quantidade = 2

        cy.get('[class= "product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Purple').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .text-skin > .icon-basket').should('contain' , quantidade)
        cy.get('.woocommerce-message').should('contain' , quantidade + '× “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')


    });

});