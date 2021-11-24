import singleCharacterTypeGuard from "../../contexts/selectedCharacter/utils/typeGuards/singleCharacterTypeGuard"
import characterComicsTypeGuard from "../../hooks/useCharacterComics/utils/typeGuards/characterComicsTypeGuard"
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
  let storageData

  const optionalItemIdParam = itemId ? itemId : null
  const currentStoragePath = getCurrentStorage(storagePath, optionalItemIdParam)

  if (
    list &&
    item &&
    (singleCharacterTypeGuard(item) || characterComicsTypeGuard(item))
  ) {
    storageData = [...list, item]
  }

  if (list && !item) {
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