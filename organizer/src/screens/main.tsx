import { useCallback } from 'react'
import { onThemeChangeHandler } from '../common/handlers/onThemeChange'
import { LoginScreen } from './LoginScreen'
import { useFocusEffect } from '@react-navigation/native'
import { useColorMode } from 'native-base'

export const MainScreen = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  useFocusEffect(
    useCallback(() => {
      const handler = onThemeChangeHandler(colorMode, toggleColorMode)
      return () => handler.remove()
    }, [toggleColorMode, colorMode])
  )
  return <LoginScreen />
}
