/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function(){
        cy.visit('./src/index.html')
    })
    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
    it('preenche os campos obrigatórios e envia o formulário', function() {
        const longText = 'texto, texto, texto, texto, texto, texto, texto, texto, texto,, texto, texto, texto,, texto, texto, texto,, texto, texto, texto,, texto, texto, texto,, texto, texto, texto,, texto, texto, texto,, texto, texto, texto,, texto, texto, texto,'
        cy.get('#firstName').type('Ryan')
        cy.get('#lastName').type('Costa')
        cy.get('#email').type('validacao@rwtech.com.br')
        cy.get('#open-text-area').type(longText, {delay : 0})
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')

    })

    it.only('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida' , function(){
        const longText = 'texto, texto, texto, texto, texto, texto, texto, texto, texto,, texto, texto, texto,, texto, texto, texto,, texto, texto, texto,, texto, texto, texto,, texto, texto, texto,, texto, texto, texto,, texto, texto, texto,, texto, texto, texto,'
        cy.get('#firstName').type('Ryan')
        cy.get('#lastName').type('Costa')
        cy.get('#email').type('validacao@rwtech.com,br')
        cy.get('#open-text-area').type('texto')
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')

    })

    it.only('aparecer valor vazio ao digitar caracter diferente de numero no telefone' , function(){

        cy.get('#phone').type('kdkdskskskd')
        .should("have.value" , '')
    })
  })
  