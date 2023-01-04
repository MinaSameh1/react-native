/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { StyleSheet, Text, useColorScheme, View } from 'react-native'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: isDarkMode ? 'black' : 'white',
    },
    font: {
      color: isDarkMode ? '#fff' : '#000',
    },
  })

  return (
    <View style={styles.container}>
      <Text style={styles.font}>This is a test!</Text>
      <Text style={styles.font}>This is a test 2.0!</Text>
      <Text style={styles.font}>
        {isDarkMode ? 'This is dark mode' : 'This is light mode'}
      </Text>
    </View>
  )
}

export default App
