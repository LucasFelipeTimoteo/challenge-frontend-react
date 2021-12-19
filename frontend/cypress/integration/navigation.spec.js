/// <reference types="cypress" />

describe('Navigate between pages', () => {
  it('Navigate between all pages options in header', () => {
    cy.visit("/")
    cy.interceptMarvelAPI('characters')

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
    cy.interceptMarvelAPI('characters').as('charactersList')
    cy.visit('/')
    cy.wait('@charactersList')

    cy.interceptMarvelAPI('comics').as('comicsList')
    cy.get('[data-testid="cardMediaThumbnail"]').first().click()
    cy.wait('@comicsList')

    cy.location('pathname').should('match', /\/character\/\d+\/comics/)
  })
})
