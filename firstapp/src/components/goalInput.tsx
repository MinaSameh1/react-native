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
  const [goalEntered, setGoalEntered] = useState('')

  function handleInput(txt: string) {
    setGoalEntered(txt)
  }

  return (
    <Modal animationType="slide" visible={props.visible}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Write your goal here"
          onChangeText={handleInput}
          value={goalEntered}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="add item"
              onPress={() => {
                props.handleAdd(goalEntered)
                setGoalEntered('')
              }}
            />
          </View>
          <View style={styles.button}>
            <Button title="cancel" onPress={props.close} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputText: {
    borderWidth: 1,
    color: '#000',
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
