export interface ICharacterComicsDates {
  type: "onsaleDate" | "focDate",
  date: Date
}

export interface ICharacterComicsPrices {
  type: "printPrice" | "digitalPrice",
  price: number
}

export interface ICharacterComicsThumbnail {
  path: string,
  extension: string
}

export interface ICharacterComics {
  id: string,
  title: string,
  description: string,
  pageCount: number,
  thumbnail: ICharacterComicsThumbnail
  dates: ICharacterComicsDates[]
  prices: ICharacterComicsPrices[]
}