import { View, StyleSheet, Button, Pressable, Text } from 'react-native'

export const Menu: React.FC = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => { }}>
        <Text style={styles.text}>Explore</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => { }}>
        <Text style={styles.text}>Items</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => { }}>
        <Text style={styles.text}>Profile</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    margin: 8
  },
  text: {
    color: '#0000ff'
  },
  button: {
    padding: 5,
    margin: 5,
    backgroundColor: '#efefef'
  }
})
