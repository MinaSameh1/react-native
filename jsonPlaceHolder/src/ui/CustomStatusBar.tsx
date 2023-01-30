import { useColorScheme, StatusBar } from 'react-native'

const CustomStatusBar = () => {
  const colorMode = useColorScheme() === 'light'
  return (
    <StatusBar
      backgroundColor={colorMode ? '#fff' : '#000'}
      barStyle={colorMode ? 'dark-content' : 'light-content'}
    />
  )
}

export default CustomStatusBar
