import React, { createContext } from 'react'
import theme from '../../config/theme.config'
import { useColorScheme } from 'react-native'

const ThemeContext = createContext({})

interface Props {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
  const isDark = useColorScheme() === 'dark'
  return (
    <ThemeContext.Provider value={isDark ? theme.dark : theme.light}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
