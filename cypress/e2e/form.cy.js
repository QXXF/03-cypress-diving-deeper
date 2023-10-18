/// <reference types="Cypress" />

describe('form contatti', () => {
    it('verifica il funzionamento del form', () => {
        
        // Navigare fino alla pagina contatti
        cy.visit('http://localhost:5173/')
        cy.get('[data-cy="header-contacts-link"]').click()

        cy.getById('contact-input-message').type('Messaggio')
        cy.getById('contact-input-name').type('Giuliano')
        cy.getById('contact-input-email').type('gg@gmail.com')
        
        // Verificare la visibilita e il messaggio dell'alert
        cy.on('window:alert', (string) => {
            expect(string).to.contain('OK')
        })

        cy.getById('contact-btn-submit').click()


        cy.getById('contact-btn-submit').then( (el) => {
            expect(el).to.be.visible
            expect(el).to.be.disabled
            expect(el.attr('disabled')).to.not.be.undefined
            expect(el.text()).to.contain('Inviando...')
        })

        cy.wait(1000)

    })

    it('verifica la validazione del form', () => {
        
        // Navigare fino alla pagina contatti
        cy.visit('http://localhost:5173/')
        cy.get('[data-cy="header-contacts-link"]').click()

        cy.getById('contact-input-name').type('Giuliano')
        cy.getById('contact-input-email').type('gg@gmail.com')

        cy.getById('contact-input-message')
            .type('Messaggio')
            .clear()
            .blur()
            .parent()
            .then( (el) => {
                expect(el.attr('class')).to.contain('invalid')
            })
    })
})