import { Text, useColorScheme, View } from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.white
  }

  return (
    <View style={backgroundStyle}>
      <Text>Test</Text>
    </View>
  )
}

export default App
