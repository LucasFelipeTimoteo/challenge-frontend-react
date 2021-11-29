import singleCharacterTypeGuard from "../../contexts/selectedCharacter/utils/typeGuards/singleCharacterTypeGuard"
import charactersListTypeGuard from "../../hooks/useCharacters/utils/typeGuards/charactersListTypeGuard"
import { ISetLocalStorageData, storagePathOptions } from "./types"
import getCurrentStorage from "./utils/getCurrentStorage"

function setLocalStorageData(
  storagePath: storagePathOptions,
  {
    item,
    list,
    itemId
  }: ISetLocalStorageData
) {

  if (new Blob(Object.values(localStorage)).size >= 4030000) {
    return
  }

  let storageData
  const optionalItemIdParam = itemId ? itemId : null
  const currentStoragePath = getCurrentStorage(storagePath, optionalItemIdParam)

  if (
    list &&
    item &&
    singleCharacterTypeGuard(item)
  ) {
    storageData = [...list, item]
  }

  if (list && !item) {
    const isCharactersList = charactersListTypeGuard(list)

    if (list.length >= 160 && isCharactersList) {
      list.length = 160
    }
    if (list.length >= 20 && !isCharactersList) {
      list.length = 20
    }

    storageData = list
  }

  if (item && !list) {
    storageData = item
  }

  if (currentStoragePath) {
    window.localStorage.setItem(
      currentStoragePath,
      JSON.stringify(storageData)
    )
  }
}

export default setLocalStorageData