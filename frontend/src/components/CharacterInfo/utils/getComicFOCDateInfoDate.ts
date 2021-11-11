import { ICharacterComicsDates } from "../../../hooks/useCharacterComics/types"


const getComicFOCDateInfoDate = (comicDates: ICharacterComicsDates[]) => {

  const comicFOCDateInfo = comicDates.filter(date => date.type === "focDate")[0]

  const comicFOCDateInfoTime = new Date(comicFOCDateInfo.date)
  const comicFOCDateInfoDate = String(comicFOCDateInfoTime) !== 'Invalid Date'
    ? comicFOCDateInfoTime.toLocaleDateString().replace(
      new RegExp('/', 'g'), '/'
    )
    : ''

  return comicFOCDateInfoDate
}

export default getComicFOCDateInfoDate