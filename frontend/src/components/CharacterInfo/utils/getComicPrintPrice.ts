import { ICharacterComicsPrices } from "../../../hooks/useCharacterComics/types"

const getComicPrintPrice = (comicPrices: ICharacterComicsPrices[]) => {
  const comicPrintPriceinfo = comicPrices.filter((prices) => prices.type === "printPrice")[0]
  const comicPrintPrice = comicPrintPriceinfo.price

  return comicPrintPrice
}

export default getComicPrintPrice