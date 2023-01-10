import { View, Text, StyleSheet, ViewStyle } from 'react-native'

interface Props {
  name: string
  style?: ViewStyle
}

export const ItemCard: React.FC<Props> = props => {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.text}>{props.name}</Text>
    </View>
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
