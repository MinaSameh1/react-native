import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { colors } from '../config'

interface Props {
  value: string
  color: string
}
export const Item = ({ value, color }: Props) => {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <View
      style={{
        ...styles.goalItem,
        backgroundColor: isDarkMode ? colors.purple : colors.lightpurple
      }}>
      <Text style={{ color: color }}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 5,
    padding: 10,
    borderRadius: 5
  }
})
