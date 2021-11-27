/// <reference types = "cypress" />
const perfil = require('../fixtures/perfil.json')

context('funcionalidade login', () => {

    beforeEach(() => {
        cy.visit("minha-conta")


    });

    afterEach(() => {
        cy.screenshot()
    });

    it('deve fazer login com sucesso', () => {

        cy.get('#username').type("aluno_ebac@teste.com")
        cy.get('#password').type("teste@teste.com")
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', "Olá")
    })

    it('deve fazer login com sucesso - usando arquivo de dados', () => {

        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', "Olá")

    });

    it('deve fazer login com sucesso - usando fixture', () => {

        cy.fixture('perfil').then(dados => {

            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()

            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', "Olá")
        })

    });

    it('deve exibir uma mensagem de erro ao inserir usuário inválido', () => {

        cy.get('#username').type("aluno_ebac20@teste.com")
        cy.get('#password').type("teste@teste.com")
        cy.get('.woocommerce-form > .button').click()

    })

    it('deve exibir uma mensagem de erro ao inserir a senha inválida', () => {

        cy.get('#username').type("aluno_ebac@teste.com")
        cy.get('#password').type("teste@123teste.com")
        cy.get('.woocommerce-form > .button').click()
    })

})