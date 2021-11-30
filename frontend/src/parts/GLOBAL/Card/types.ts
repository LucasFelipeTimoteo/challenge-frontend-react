import { CreateCSSProperties, PropsFunc } from "@material-ui/styles"
import { CSSProperties } from "react"
import { ICharacter } from "../../../hooks/useCharacters/types"

export interface ICardProps {
  character: ICharacter,
  characterThumbnail: string,
  characterThumbnailExtension: string,
  characterId: number,
  characterName: string,
  lastVisibleCharacter: boolean
  characterDescription: string,
  inView?: boolean
}


export type StylesObjectJSS = (
  CSSProperties |
  CreateCSSProperties<{}> |
  PropsFunc<{}, CreateCSSProperties<{}>>
)