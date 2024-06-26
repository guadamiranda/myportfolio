'use client'
import { createContext, useState } from 'react'

const themes = {
    dark: {
        backgroundColor: '#100c0c',
        color: 'white',
    },

    light: {
        backgroundColor: 'white',
        color: 'black',
    }
}

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(true)
    const theme = isDark? themes.dark : themes.light;

    const toggleTheme = () => {
        setIsDark(!isDark)
    }

    return(
        <ThemeContext.Provider value={[ {theme, isDark} , toggleTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}