/// <reference types="Cypress" />

describe('navigazione tra pagine', () => {
    it('naviga tra home e contatti', () => {
        cy.visit('http://localhost:5173/')

        // Navigare fino alla pagina contatti
        cy.get('[data-cy="header-contacts-link"]').click()

        // Verificare che la rotta sia corretta
        cy.location("pathname").should('eq', '/contacts') // home -> / (oppure) contatti -> /contacts

        // Tornare alla pagina home
        // cy.get('[data-cy="header-home-link"]').click()
        cy.go("back")

        // Ri-verificare la presenza del titolo corretto
        cy.location("pathname").should('eq', '/')
    })
})