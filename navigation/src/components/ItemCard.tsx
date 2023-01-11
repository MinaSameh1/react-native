import { View, Text, StyleSheet, ViewStyle, Pressable } from 'react-native'

interface Props {
  name: string
  style?: ViewStyle
  onPress?: () => void
}

export const ItemCard: React.FC<Props> = props => {
  return (
    <Pressable onPress={props.onPress}>
      <View style={[styles.container, props.style]}>
        <Text style={styles.text}>{props.name}</Text>
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
