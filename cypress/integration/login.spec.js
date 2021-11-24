/// <reference types = "cypress" />

context('funcionalidade login', () => {

    it ('Deve fazer login com sucesso', () => {
cy.visit ("http://lojaebac.ebaconline.art.br/minha-conta/")
cy.get('#username').type ("aluno_ebac@teste.com")
cy.get('#password').type ("teste@teste.com")
cy.get('.woocommerce-form > .button') .click ()

cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain', "Olá")
    })

    it ('deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        
cy.visit ("http://lojaebac.ebaconline.art.br/minha-conta/")
cy.get('#username').type ("aluno_ebac20@teste.com")
cy.get('#password').type ("teste@teste.com")
cy.get('.woocommerce-form > .button') .click ()

})

it ('deve exibir uma mensagem de erro ao inserir a senha inválida', () => {

    cy.visit ("http://lojaebac.ebaconline.art.br/minha-conta/")
    cy.get('#username').type ("aluno_ebac@teste.com")
    cy.get('#password').type ("teste@123teste.com")
    cy.get('.woocommerce-form > .button') .click () 
})
   
})