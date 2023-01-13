import { Button, StyleSheet, Text, View } from 'react-native'
import { Menu } from '../components/Menu'

export default function Profile() {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.text}>Name: Mina</Text>
        <Text style={styles.text}>City: Egypt</Text>
        <Button title="Edit Profile" />
      </View>
      <View>
        <Menu currentScreen="Profile" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    paddingTop: 24
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 5,
    color: '#000'
  },
  text: {
    marginTop: 5,
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
