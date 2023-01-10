import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { ItemCard } from '../components/ItemCard'
import { Menu } from '../components/Menu'

export default function ItemsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Items Screen</Text>
      <ScrollView>
        <ItemCard name="test item" />
        <ItemCard name="microphone" />
        <ItemCard name="food i guess" />
        <ItemCard name="test 2" />
        <ItemCard name="speaker" />
        <ItemCard name="chicken" />
      </ScrollView>
      <Menu />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  text: {
    color: '#000',
    padding: 16,
    fontSize: 28,
    fontWeight: 'bold'
  }
})
