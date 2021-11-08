import { useState } from "react"

type handleSearchEventType = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>

export default function useSearch() {
  const [searchValue, setSearchValue] = useState('')
  const handleSearchValue = (event: handleSearchEventType) => {
    const targetValue = event.target.value
    setSearchValue(targetValue)
  }

  const [searchKey, setSearchKey] = useState('')
  const handleSearchKey = () => {
    const parsedSearchValue = searchValue.trim()
    setSearchKey(parsedSearchValue)
  }

  return {
    searchValue,
    handleSearchValue,
    searchKey,
    handleSearchKey
  }
}