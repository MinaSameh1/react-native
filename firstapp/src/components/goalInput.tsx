import { useState } from 'react'
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  useColorScheme,
  Modal
} from 'react-native'
import { colors } from '../config'

interface Props {
  handleAdd: (text: string) => void
  visible: boolean
  close: () => void
}

export const GoalInput = (props: Props) => {
  const isDarkMode = useColorScheme() === 'dark'
  const [goalEntered, setGoalEntered] = useState('')

  function handleInput(txt: string) {
    setGoalEntered(txt)
  }

  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.purple : colors.lightpurple,
    color: isDarkMode ? colors.light : colors.dark,
    borderBottomColor: isDarkMode ? colors.lightpink : colors.dark
  }

  return (
    <Modal animationType="slide" visible={props.visible} transparent>
      <View
        style={{
          ...styles.inputContainer,
          backgroundColor: backgroundStyle.backgroundColor
        }}>
        <TextInput
          style={{ ...styles.inputText, color: backgroundStyle.color }}
          placeholder="Write your goal here"
          onChangeText={handleInput}
          value={goalEntered}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title="cancel" onPress={props.close} color="#f57" />
          </View>
          <View style={styles.button}>
            <Button
              title="add item"
              onPress={() => {
                props.handleAdd(goalEntered)
                setGoalEntered('')
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputText: {
    borderWidth: 1,
    borderColor: colors.blue,
    width: '80%',
    marginRight: 8
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10
  },
  buttons: {
    flexDirection: 'row',
    padding: 20
  },
  button: {
    width: '40%',
    marginHorizontal: 6
  }
})
