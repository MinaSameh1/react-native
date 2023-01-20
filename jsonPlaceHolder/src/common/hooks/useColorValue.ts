import { useColorScheme } from 'react-native'

export function useColorModeValue(light: string, dark: string) {
  const mode = useColorScheme() === 'light'
  return mode ? light : dark
}

export default useColorModeValue
