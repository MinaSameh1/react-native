import { Pressable, StyleSheet, Text, useColorScheme, View } from 'react-native'
import { colors } from '../config'

interface Props {
  value: string
  id: string
  color: string
  onPress: (id: string) => void
}

export const Item = ({ value, color, onPress, id }: Props) => {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <View
      style={{
        ...styles.goalItem,
        backgroundColor: isDarkMode ? colors.purple : colors.lightpurple
      }}>
      <Pressable android_ripple={{ color: '#5ff' }} onPress={() => onPress(id)}>
        <Text style={[{ color: color }, styles.text]}>{value}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 5,
    borderRadius: 5
  },
  text: {
    padding: 10
  }
})
