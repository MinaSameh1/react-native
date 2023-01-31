import { Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import useColorModeValue from './common/hooks/useColorModeValue'
import { AppContainer } from './components/AppContainer'
import CustomStatusBar from './ui/CustomStatusBar'

const App = () => {
  const color = useColorModeValue('#fff', '#000')
  const textColor = useColorModeValue('#000', '#fff')
  return (
    <AppContainer>
      <CustomStatusBar />
      <SafeAreaProvider style={{ backgroundColor: color }}>
        <Text style={{ color: textColor }} testID="text">
          Hello World!
        </Text>
      </SafeAreaProvider>
    </AppContainer>
  )
}

export default App
