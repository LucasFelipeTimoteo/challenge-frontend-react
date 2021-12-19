import { render, screen } from "@testing-library/react"
import CharacterName from '../..'
import { altCharacterName } from "../../../altTexts"

test('should render character name correctly', () => {
  render(<CharacterName characterName={'Hulk'} />)
  const characterNameParagraph = screen.getByText(/hulk/i)
  
  expect(characterNameParagraph).toBeInTheDocument()
})

test('should render altCharacterName once characterName is not defined', () => {
  render(<CharacterName characterName="" />)
  const characterNameParagraph = screen.getByText(altCharacterName)

  expect(characterNameParagraph).toBeInTheDocument()
})