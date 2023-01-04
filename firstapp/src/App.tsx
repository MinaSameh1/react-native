import React from 'react'
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View
} from 'react-native'
import { colors } from './config'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.dark : colors.light,
    color: isDarkMode ? colors.light : colors.dark
  }

  return (
    <View style={{ ...styles.container, ...backgroundStyle }}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputText} placeholder="Write here" />
        <Button title="add item" />
      </View>
      <View style={styles.listContainer}>
        <Text>List of items</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 20
  },
  listContainer: {
    padding: 20
  },
  inputText: {
    borderWidth: 1,
    borderColor: '#0232a2',
    width: '80%',
    marginRight: 8
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default App
