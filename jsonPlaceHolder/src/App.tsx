import { Text, StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import useColorModeValue from './common/hooks/useColorValue'

const App = () => {
  const color = useColorModeValue('#fff', '#000')
  const textColor = useColorModeValue('#000', '#fff')

  return (
    <SafeAreaProvider style={{ backgroundColor: color }}>
      <StatusBar backgroundColor={color} />
      <Text style={{ color: textColor }}>Hello World!</Text>
    </SafeAreaProvider>
  )
}

export default App
