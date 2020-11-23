import { useEffect } from "react"
import { useReducer } from "react"
import { createContext, useContext } from "react"

const themeReducer = (theme, action) => {
    switch(action.type) {
        case 'toggleTheme' :
            return {...theme, isLight: !theme.isLight}

        default: return (theme)
    }
}

const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {

    const themeValue = {
        isLight: true,
        dark: {
            bgColor: 'black',
            color: '#FAFAFA',
            btn: 'blue',
            border: 'none',
            inverted: true
        },
        light: {
            bgColor: 'white',
            color: 'black',
            btn: 'black'
        }
    }
  const [theme, dispatch] = useReducer(themeReducer, themeValue)

  const UI = theme.isLight ? theme.light : theme.dark
    

    return (
        <ThemeContext.Provider value= {{UI, dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
export const ThemeValue = () => useContext(ThemeContext)