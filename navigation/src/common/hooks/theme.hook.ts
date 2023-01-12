import { useContext } from 'react'
import { theme } from '../../config/theme.config'
import ThemeContext from '../context/theme.context'

export const useTheme = () => {
  const CustomTheme = useContext(ThemeContext) as typeof theme.light
  return CustomTheme
}
