import React, {
  createContext,
  useContext,
  useMemo,
  useState
} from "react";

import {
  createTheme,
  CssBaseline,
  PaletteType,
  responsiveFontSizes,
  ThemeProvider
} from "@material-ui/core";

import {
  MUIThemeProviderProps,
  MUIThemeProviderValue
} from "./types";

const MUIThemeContext = createContext({} as MUIThemeProviderValue)

const storageTheme = window.localStorage.getItem('MARVEL_STRIKE_TEAM_THEME')

export const MUIThemeProvider = ({ children }: MUIThemeProviderProps) => {
  let pageDefaultTheme: PaletteType = "dark"
  if (storageTheme === "light" || storageTheme === "dark") {
    pageDefaultTheme = storageTheme
  }

  const [pageTheme, setPageTheme] = useState<PaletteType>(pageDefaultTheme)

  const togglepageTheme = () => {
    const newPageTheme: PaletteType = pageTheme === "light" ? "dark" : "light"
    setPageTheme(newPageTheme)

    window.localStorage.setItem('MARVEL_STRIKE_TEAM_THEME', newPageTheme)
  }

  let theme = useMemo(() => (
    createTheme({
      overrides: {
        MuiInputBase: {
          root: {
            backgroundColor: pageTheme === "dark" ? '#cecece' : 'whitesmoke',
            color: 'black'
          }
        }
      },

      palette: {
        primary: {
          main: '#ec1d24',
        },
        secondary: {
          main: '#1a1a1a',
        },

        type: pageTheme === "dark" ? 'dark' : 'light'
      },

      breakpoints: {
        values: {
          xs: 300,
          sm: 500,
          md: 830,
          lg: 1280,
          xl: 1920,
        },
      },

      typography: {
        h1: {
          fontSize: 42
        },
        h2: {
          fontSize: 29
        },
        h6: {
          fontSize: 19
        }
      }
    })
  ), [pageTheme])

  const MUITheme = responsiveFontSizes(theme)
  const providerValues = {
    togglepageTheme,
    pageTheme
  }

  return (
    <ThemeProvider theme={MUITheme}>
      <CssBaseline />
      <MUIThemeContext.Provider value={providerValues}>
        {children}
      </MUIThemeContext.Provider>
    </ThemeProvider>
  )
}

export const useMUITheme = () => {
  const { togglepageTheme, pageTheme } = useContext(MUIThemeContext)

  return { togglepageTheme, pageTheme }
}