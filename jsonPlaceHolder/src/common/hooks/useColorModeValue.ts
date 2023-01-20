import { useColorScheme } from 'react-native'

export function useColorModeValue<T = string>(light: T, dark: T) {
  const mode = useColorScheme() === 'light'
  return (mode ? light : dark) as T
}

export default useColorModeValue
