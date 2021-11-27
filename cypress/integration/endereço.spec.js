/// <reference types="cypress"/>
import enderecoPage from '../support/page-objects/endereco.page';
const dadosEndereco = require('../fixtures/endereco.json')

describe('funcionalidade endereço - faturamento e entrega', () => {
    beforeEach(() => {
        cy.visit('minha conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })

    });

    it('deve fazer cadastro de faturamento com sucesso', () => {
        enderecoPage.editarEnderecoFaturamento('Juliana', 'Monteiro', 'EBAC', 'Brasil', 'Av. São Sebastião', '293', 'Ubatuba', 'São Paulo', '12450-000', '12 987348734', 'teste_aluno@teste.com')
        cy.get('.woocommerce-message').should('contain', "Endereço alterado com sucesso.")
    });

    it('deve fazer cadastro de faturamento com sucesso - usando arquivo de dados', () => {
        enderecoPage.editarEnderecoFaturamento(
            dadosEndereco[2].nome,
            dadosEndereco[2].sobrenome,
            dadosEndereco[2].empresa,
            dadosEndereco[2].pais,
            dadosEndereco[2].endereco,
            dadosEndereco[2].numero,
            dadosEndereco[2].cidade,
            dadosEndereco[2].estado,
            dadosEndereco[2].cep,
            dadosEndereco[2].telefone,
            dadosEndereco[2].email
            )
        cy.get('.woocommerce-message').should('contain', "Endereço alterado com sucesso.")
    });
});
