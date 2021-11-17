import { ReactNode } from "react"

export type MUIThemeProviderProps = {
  children: ReactNode
}

export type MUIThemeProviderValue = {
  pageTheme: string,
  togglepageTheme: () => void
}