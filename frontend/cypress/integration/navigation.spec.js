/// <reference types="cypress" />

describe('Navigate between pages', () => {
  it('Navigate between all pages options in header', () => {
    cy.visit("/")
    cy.intercept('GET', '**/characters*', { fixture: 'charactersMock.json' })

    cy.get('[data-testid="teamButton"]').as('teamButton').click()
    cy.location('pathname').should('eq', '/team')

    cy.get('[data-testid="returnButton"]').click()
    cy.get('@teamButton').should('be.visible')
    cy.location('pathname').should('eq', '/')

    cy.get('@teamButton').click()
    cy.get('[data-testid=pageLogo]').click()
    cy.location('pathname').should('eq', '/')
  })

  it('Navigate to selected character page', () => {
    cy.visit('/')
    cy.intercept('GET', '**/characters*', { fixture: 'charactersMock.json' })

    cy.get('[data-testid="cardMediaThumbnail"]').first().click()

    cy.intercept('GET', '**/comics*', { fixture: 'comicsMock.json' })
    cy.location('pathname').should('match', /\/character\/\d+\/comics/)
  })

  it('navigate to comics page without select a character', () => {
    cy.visit('/character/1010354/comics')
    cy.intercept('GET', '**/comics*', { fixture: 'comicsMock.json' })

    cy.intercept(
      { method: 'GET', pathname: /\/characters\/\d+/ },
      { fixture: 'selectedCharacterMock.json' }
    )
  })
})
