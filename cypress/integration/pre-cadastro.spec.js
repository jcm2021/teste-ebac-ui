/// <reference types = "cypress" />
var faker = require('faker');

describe('funcionalidade pré cadastro', () => {


    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
    });


    it('deve completar o pré cadastro com sucesso', () => {

        let nomefaker = faker.name.firstName()
        let sobrenomefaker = faker.name.lastName()
        let emailfaker = faker.internet.email

        cy.get('#reg_email').type(emailfaker)
        cy.get('#reg_password').type('123teste@123$')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomefaker)
        cy.get('#account_last_name').type(sobrenomefaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
    
});