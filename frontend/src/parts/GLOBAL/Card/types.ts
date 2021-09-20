import { CreateCSSProperties, PropsFunc } from "@material-ui/styles"
import { CSSProperties } from "react"

export type CardProps = {
  favorited?: boolean,
  thumbnail: string,
  extension: string,
  characterName: string,
  characterDescription: string
}


export type StylesObjectJSS = (
  CSSProperties |
  CreateCSSProperties<{}> |
  PropsFunc<{},
  CreateCSSProperties<{}>>
)