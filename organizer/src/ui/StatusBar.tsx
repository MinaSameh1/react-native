import { useColorMode, StatusBar as StatBar } from 'native-base'

export const StatusBar = () => {
  const { colorMode } = useColorMode()
  return (
    <StatBar
      backgroundColor={colorMode === 'light' ? '#fff' : '#171933'}
      barStyle={colorMode === 'light' ? 'dark-content' : 'light-content'}
    />
  )
}
