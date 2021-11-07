import { CreateCSSProperties, PropsFunc } from "@material-ui/styles"
import { CSSProperties } from "react"
import { ICharacter } from "../../../types/ICharacters/types"

export interface ICardProps {
  character: ICharacter,
  thumbnail: string,
  extension: string,
  characterId: number,
  characterName: string,
  lastVisibleCharacter: boolean
  characterDescription: string,
}


export type StylesObjectJSS = (
  CSSProperties |
  CreateCSSProperties<{}> |
  PropsFunc<{}, CreateCSSProperties<{}>>
)