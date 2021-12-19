import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import CardTextContent from "../.."

const getAndClickInCardTextContent = () => {
  render(
    <CardTextContent
      characterName="Jonh Doe"
      characterDescription="lorem ipsum"
    />
  )

  const cardTextElement = screen.getByTestId('cardText')
  userEvent.click(cardTextElement)

  return cardTextElement
}

test('should be on page after click', () => {
  const cardTextElement = getAndClickInCardTextContent()

  expect(cardTextElement).toBeInTheDocument()
})

test('should be visible after click', () => {
  const cardTextElement = getAndClickInCardTextContent()

  expect(cardTextElement).toBeVisible()
})

test('Character desription should be visible after click', () => {
  getAndClickInCardTextContent()
  const characterDescriptionElement = screen.getByText(/lorem ipsum/i)

  expect(characterDescriptionElement).toBeVisible()
})