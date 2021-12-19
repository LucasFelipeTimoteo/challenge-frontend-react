/// <reference types="cypress" />

import charactersMock from '../fixtures/charactersMock.json'

describe('Team page actions', () => {
  it('Add character to favorites in team page and remove characters of team page', () => {
    cy.interceptMarvelAPI('characters').as('charactersList')
    cy.visit('/')
    cy.scrollTo('top')
    cy.reload()

    cy.get('[data-testid="loadMoreSwitch"]').as("loadMoreSwitch").click()
    cy.get('.MuiSwitch-root > .MuiButtonBase-root > .MuiIconButton-label > input')
      .as('loadMoreSwitchInnerCheckbox')
      .should('not.be.checked')

    cy.wait('@charactersList')

    cy.get('[data-testId="addToFavorites"]').as('addToFavorite')
    cy.get('[data-testId="favoriteCharacterActionButton"]')
      .as('favoriteCharacterActionButton')
      .click({ multiple: true })

    cy.get('[data-testId="deleteOfFavorites"]')
      .as('deleteOfFavorites')
      .should('have.length', charactersMock.data.results.length)

    cy.get('[data-testid="teamButton"]').click()
    cy.location('pathname').should('eq', '/team')

    cy.get('[data-testid="resultsNotFound"]')
      .should('not.exist')

    cy.get('[data-testid="card"]')
      .as('cardFavorite')
      .should('have.length', charactersMock.data.results.length)

    cy.get('[data-testId="deleteOfFavorites"]')
      .should('have.length', charactersMock.data.results.length)
      .click({ multiple: true })
      .should('not.exist')

    cy.get('@cardFavorite').should('not.exist')
    cy.get('[data-testid="resultsNotFound"]').should('exist')
  })
})