import { View, Text, StyleSheet, ViewStyle, Pressable } from 'react-native'
import { useTheme } from '../common/hooks/theme.hook'

interface Props {
  name: string
  style?: ViewStyle
  onPress?: () => void
}

export const ItemCard: React.FC<Props> = props => {
  const theme = useTheme()
  const style = {
    backgroundColor: theme.primaryBg,
    color: theme.color
  }
  return (
    <Pressable onPress={props.onPress}>
      <View style={[styles.container, props.style, style]}>
        <Text style={[styles.text, style]}>{props.name}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    padding: 12,
    margin: 8
  },
  text: {
    color: '#000'
  }
})
