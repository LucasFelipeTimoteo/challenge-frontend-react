import md5 from "md5"
import { useEffect, useState } from "react"
import { ICharacter } from "../../../../hooks/useCharacters/types"
import getEnvVariables from "../../../../hooks/utils/getEnvVariables"
import marvelCharactersApi from "../../../../services/api/marvelCharactersApi"
import setLocalStorageData from "../../../../utils/setListToLocalStorage"
import singleCharacterTypeGuard from "../../utils/typeGuards/singleCharacterTypeGuard"

export default function useSelectedCharacter(
  pathId: number | null,
  selectedCharacterDefaultValue: ICharacter,
  storageCharacterIdIsTheSameOfPath: boolean
) {
  const [selectedCharacter, setSelectedCharacter] = useState(selectedCharacterDefaultValue)
  const [loadingSelectedCharacter, setLoadingSelectedCharacter] = useState(false)

  const handleSelectedCharacter = (selectedUser: ICharacter) => {
    setSelectedCharacter(selectedUser)
    setLocalStorageData('selectedCharacter', { item: selectedUser })
  }

  useEffect(() => {
    const getSelectedCharacter = async (pathId: number) => {
      setLoadingSelectedCharacter(true)

      const timestamp = String(Date.now())
      const { privateKey, publicKey, limit } = getEnvVariables()
      const hash = md5(timestamp + privateKey + publicKey)

      try {
        const api = marvelCharactersApi({
          limit,
          publicKey,
          hash,
          timestamp,
        })
        const apiRequest = await api(`characters/${pathId}`)

        const response = apiRequest.data
        const character = response.data.results[0]

        if (!singleCharacterTypeGuard(character)) {
          throw new Error('API response does not have correct type')
        }

        setSelectedCharacter(character)
        setLocalStorageData('selectedCharacter', { item: character })

        setLoadingSelectedCharacter(false)
      }
      catch (error) {
        window.location.pathname = '/'
        console.log(error)
      }
    }

    if (typeof pathId === 'number' && !storageCharacterIdIsTheSameOfPath) {
      getSelectedCharacter(pathId)
    }
  }, [pathId, storageCharacterIdIsTheSameOfPath])

  return {
    selectedCharacter,
    loadingSelectedCharacter,
    handleSelectedCharacter
  }
}
