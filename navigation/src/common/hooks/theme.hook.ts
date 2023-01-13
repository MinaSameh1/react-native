import { useContext } from 'react'
import { theme } from '../../config/theme.config'
import ThemeContext from '../context/theme.context'

export const useTheme = () => useContext(ThemeContext) as typeof theme.light
