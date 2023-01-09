import React, { useState } from 'react'
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View
} from 'react-native'
import { colors } from './config'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'
  const [goals, setGoals] = useState<Array<Record<string, string>>>([])
  const [goalEntered, setGoalEntered] = useState('')

  function inputHandler(txt: string) {
    setGoalEntered(txt)
  }

  function addGoalHandler() {
    if (goalEntered === '') return
    setGoals(currentGoals => [
      ...currentGoals,
      { text: goalEntered, _id: Math.random().toString() }
    ])
  }

  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.dark : colors.light,
    color: isDarkMode ? colors.light : colors.dark,
    borderBottomColor: isDarkMode ? colors.lightpink : colors.dark
  }

  return (
    <View style={{ ...styles.container, ...backgroundStyle }}>
      <View
        style={{
          ...styles.inputContainer,
          borderBottomColor: backgroundStyle.borderBottomColor
        }}>
        <TextInput
          style={{ ...styles.inputText, color: backgroundStyle.color }}
          placeholder="Write your goal here"
          onChangeText={inputHandler}
        />
        <Button title="add item" onPress={addGoalHandler} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={goals}
          renderItem={Items => (
            <View
              style={{
                ...styles.goalItem,
                backgroundColor: isDarkMode ? colors.purple : colors.lightpurple
              }}>
              <Text style={{ color: backgroundStyle.color }}>
                {Items.item.text}
              </Text>
            </View>
          )}
          keyExtractor={(item, _index) => item._id}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 20
  },
  listContainer: {
    flex: 10,
    padding: 20
  },
  inputText: {
    borderWidth: 1,
    borderColor: colors.blue,
    width: '70%',
    marginRight: 8
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingBottom: 20,
    borderBottomWidth: 1
  },
  goalItem: {
    margin: 5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.purple
  }
})

export default App
