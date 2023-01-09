import React, { useState } from 'react'
import {
  Button,
  FlatList,
  StyleSheet,
  useColorScheme,
  View
} from 'react-native'
import { GoalInput } from './components/goalInput'
import { Item } from './components/item'
import { colors } from './config'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'
  const [goals, setGoals] = useState<Array<{ text: string; _id: string }>>([])
  const [showModal, setShowModal] = useState(false)

  function addGoalHandler(txt: string) {
    if (txt === '') return
    setGoals(currentGoals => [
      ...currentGoals,
      { text: txt, _id: Math.random().toString() }
    ])
    setShowModal(modal => !modal)
    closeModal
  }

  function deleteGoalHandler(id: string) {
    setGoals(currentGoals => currentGoals.filter(item => item._id !== id))
  }

  const closeModal = () => setShowModal(modal => !modal)

  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.dark : colors.light,
    color: isDarkMode ? colors.light : colors.dark,
    borderBottomColor: isDarkMode ? colors.lightpink : colors.dark
  }

  return (
    <View style={{ ...styles.container, ...backgroundStyle }}>
      <Button title="Add Item" onPress={() => setShowModal(model => !model)} />
      {showModal && (
        <GoalInput
          visible={showModal}
          close={closeModal}
          handleAdd={addGoalHandler}
        />
      )}
      <View style={styles.listContainer}>
        <FlatList
          data={goals}
          renderItem={items => (
            <Item
              value={items.item.text}
              id={items.item._id}
              color={backgroundStyle.color}
              onPress={deleteGoalHandler}
            />
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
  goalItem: {
    margin: 5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.purple
  }
})

export default App
