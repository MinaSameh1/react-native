import {
  View,
  TextInput,
  Button,
  StyleSheet,
  useColorScheme
} from 'react-native'
import { colors } from '../config'

interface Props {
  handleInput: (txt: string) => void
  handleButton: () => void
}

export const GoalInput = (props: Props) => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.dark : colors.light,
    color: isDarkMode ? colors.light : colors.dark,
    borderBottomColor: isDarkMode ? colors.lightpink : colors.dark
  }

  return (
    <View
      style={{
        ...styles.inputContainer,
        borderBottomColor: backgroundStyle.borderBottomColor
      }}>
      <TextInput
        style={{ ...styles.inputText, color: backgroundStyle.color }}
        placeholder="Write your goal here"
        onChangeText={props.handleInput}
      />
      <Button title="add item" onPress={props.handleButton} />
    </View>
  )
}

const styles = StyleSheet.create({
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
  }
})
