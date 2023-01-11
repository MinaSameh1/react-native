import { View, Text, StyleSheet } from 'react-native'
import { ItemCard } from '../components/ItemCard'
import { Menu } from '../components/Menu'

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>These are our best items!</Text>
      <View>
        <Text style={styles.title}>Items you might like</Text>
        <View style={styles.content}>
          <ItemCard name="test item" />
          <ItemCard name="microphone" />
          <ItemCard name="food i guess" />
        </View>

        <Text style={styles.title}>Most popular</Text>
        <View style={styles.content}>
          <ItemCard name="test 2" />
          <ItemCard name="speaker" />
          <ItemCard name="chicken" />
        </View>
      </View>
      <Menu />
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginTop: 15
  },
  container: {
    padding: 16,
    backgroundColor: '#fff',
    paddingTop: 24
  },
  title: {
    fontSize: 16,
    marginTop: 16,
    marginBottom: 5,
    color: '#000'
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
    color: '#000'
  }
})

export default ExploreScreen
