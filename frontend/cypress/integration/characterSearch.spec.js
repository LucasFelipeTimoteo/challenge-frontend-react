/// <reference types="cypress" />

describe('Search for characters using searchbar', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.interceptMarvelAPI('characters')

    cy.get('[data-testid="searchbar"]').as('searchbar')
    cy.get('[data-testid="searchbarSearchButton"]').as('searchbarSearchButton')
  })

  it('All fetched characters names should match the searched value with case insensitive', () => {
    cy.interceptMarvelAPI('searchCharacter').as('searchCharactersList')

    cy.get('@searchbar').type('Hulk')
    cy.get('@searchbarSearchButton').click()

    cy.wait('@searchCharactersList')

    cy.get('[data-testid="characterName"]').each(characterNameList => {
      cy.wrap(characterNameList).contains(/hulk/i).should('exist')
    })
  })

  it('Search for a unknow character displays resultsNotFound', () => {
    cy.interceptMarvelAPI('searchCharacterNotFound')
      .as('searchCharacterNotFoundMock')

    cy.get('@searchbar').type('vdknslvsvddsadw')
    cy.get('@searchbarSearchButton').click()

    cy.wait('@searchCharacterNotFoundMock')

    cy.get('[data-testid="resultsNotFound"]').should('exist')
  })
})