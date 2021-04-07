/// <reference types="cypress"/>
context('Dev Finances', () => {

    beforeEach(() => {
        cy.visit('https://devfinance-agilizei.netlify.app/#')
        cy.get('#data-table tbody tr').should('have.length', 0)

    });
    it('Cadastrar entradas', () => {
        cy.get('#transaction .button').click()
        cy.get('#description').type('payment')
        cy.get('[name=amount]').type('0.5')
        cy.get('[type=date]').type('2021-04-07')
        cy.get('button').contains('Salvar').click()

        cy.get('#data-table tbody tr').should('have.length', 1)
    });

    it('Cadastrar saidas', () => {
        cy.get('#transaction .button').click()
        cy.get('#description').type('food')
        cy.get('[name=amount]').type('-5.5')
        cy.get('[type=date]').type('2021-04-07')
        cy.get('button').contains('Salvar').click()

        cy.get('#data-table tbody tr').should('have.length', 1)
    });

    it.only('Remover entrada e saida', () => {

        const entrada = 'Mesada'
        const saida = 'comida'
        // entrada
        cy.get('#transaction .button').click()
        cy.get('#description').type(entrada)
        cy.get('[name=amount]').type('5.5')
        cy.get('[type=date]').type('2021-04-07')
        cy.get('button').contains('Salvar').click()
        // saida
        cy.get('#transaction .button').click()
        cy.get('#description').type(saida)
        cy.get('[name=amount]').type('-10.5')
        cy.get('[type=date]').type('2021-04-07')
        cy.get('button').contains('Salvar').click()

        cy.get('td.description').contains(entrada).parent().find('img[onClick*=remove]').click()
        cy.get('td.description').contains(saida).parent().find('img[onClick*=remove]').click()

        cy.get('#data-table tbody tr').should('have.length', 0)
        cy.get('#totalDisplay').should(($p)=>{
            expect($p).to.have.length(1)
            expect($p.first()).to.contain('0,00')
        })

    });
});