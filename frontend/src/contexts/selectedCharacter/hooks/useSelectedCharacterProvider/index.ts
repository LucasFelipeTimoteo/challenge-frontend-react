import { useContext } from "react"
import { SelectedCharacterContext } from "../.."

export const useSeletedCharacter = () => {
  const {
    selectedCharacter,
    handleSelectedCharacter,
    loadingSelectedCharacter
  } = useContext(SelectedCharacterContext)

  return { selectedCharacter, handleSelectedCharacter, loadingSelectedCharacter }
}