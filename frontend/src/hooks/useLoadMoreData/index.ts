import { useState } from "react"

export default function useLoadMoreData() {
  const [loadMoreData, setLoadMoreData] = useState(true)
  
  const toggleLoadMoreData = () => {
    setLoadMoreData(prev => !prev)
  }

  return {
    loadMoreData,
    toggleLoadMoreData
  }
}