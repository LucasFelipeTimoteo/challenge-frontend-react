import comicsMock from '../fixtures/comicsMock.json'

Cypress.Commands.add('interceptMarvelAPI', (routeName) => {
  if (routeName === "characters") {
    cy.intercept('GET', '**/characters*', { fixture: 'charactersMock.json' })
  }

  if (routeName === "searchCharacter") {
    cy.intercept(
      'GET',
      '**/characters*nameStartsWith=*',
      { fixture: 'searchCharacterMock.json' }
    )
  }

  if (routeName === "searchCharacterNotFound") {
    cy.intercept(
      'GET',
      '**/characters*nameStartsWith=*',
      { fixture: 'searchCharacterNotFoundMock.json' }
    )
  }

  if (routeName === "comics") {
    cy.intercept('GET', '**/comics*', (req) => {
      req.continue((res) => {
        if (res.statusCode === 200) { // change the id cause useCharacterComics hook exclude objects with duplicate id from list
          comicsMock.data.results.forEach(comic => comic.id = Date.now())
          res.send(comicsMock)
        }
      })
    })
  }
})
