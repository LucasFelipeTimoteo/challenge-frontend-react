/// <reference types="cypress" />

import charactersMock from '../fixtures/charactersMock.json'
import comicsMock from '../fixtures/comicsMock.json'

describe('Fetch character an comics list correctly', () => {
  it('Fetch charactersList only if switch is activated', () => {
    cy.interceptMarvelAPI('characters').as('charactersList')

    cy.visit('/')
    cy.scrollTo('top')
    cy.reload()

    cy.get('[data-testid="loadMoreSwitch"]').as("loadMoreSwitch").click()
    cy.get('.MuiSwitch-root > .MuiButtonBase-root > .MuiIconButton-label > input')
      .as('loadMoreSwitchInnerCheckbox')
      .should('not.be.checked')

    cy.scrollTo('bottom')
    cy.get(`[data-testid="card"]`)
      .as('cardList')
      .should(
        'have.length',
        charactersMock.data.results.length
      )

    cy.scrollTo('top')
    cy.get('@loadMoreSwitch').click()
    cy.get('@loadMoreSwitchInnerCheckbox').should('be.checked')
    cy.scrollTo('bottom') // Return to bottom to activate intersection observer
    cy.get('[data-testid="loading"]').as('loading').should('exist') // loading should appear during characters fetch
    cy.wait(`@charactersList`)
    cy.get('@loading').should('not.exist') // loading should desappear after characters fetch
    cy.get(`[data-testid="card"]`).should(
      'have.length',
      charactersMock.data.results.length * 2 // fetch a new list should result in a list with double of prev characters
    )
  })

  it('Fetch comicsList only if switch is activated', () => {
    cy.interceptMarvelAPI('characters').as('charactersList')
    cy.interceptMarvelAPI('comics').as('comicsList')

    cy.visit('/')
    cy.wait('@charactersList')
    cy.get('[data-testid="cardMediaThumbnail"]').first().click()

    cy.get('[data-testid="loadMoreSwitch"]').as("loadMoreSwitch").click()
    cy.get('.MuiSwitch-root > .MuiButtonBase-root > .MuiIconButton-label > input')
      .as('loadMoreSwitchInnerCheckbox')
      .should('not.be.checked')

    cy.scrollTo('bottom')
    cy.get(`[data-testid="horizontalCard"] [data-testid="comicInfo"]`)
      .as('horizontalCardList')
      .should(
        'have.length',
        comicsMock.data.results.length
      )

    cy.scrollTo('top')
    cy.get('@loadMoreSwitch').click()
    cy.get('@loadMoreSwitchInnerCheckbox').should('be.checked')

    cy.scrollTo('bottom') // Return to bottom to activate intersection observer
    cy.get('[data-testid="loading"]').as('loading').should('exist') // loading should appear during characters fetch
    cy.wait('@comicsList')
    cy.get('@loading').should('not.exist') // loading should desappear after characters fetch
    cy.get(`[data-testid="horizontalCard"] [data-testid="comicInfo"]`).should(
      'have.length',
      comicsMock.data.results.length * 2 // fetch a new list should result in a list with double of prev characters
    )
  })
})