import { useNavigation } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { View, StyleSheet, Pressable, Text } from 'react-native'
import { useTheme } from '../common/hooks/theme.hook'
import { RootStackParams } from '../types/rootStack.type'

interface Props {
  currentScreen: string
}

export const Menu: React.FC<Props> = ({ currentScreen }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>()

  const theme = useTheme()

  return (
    <View style={{ ...styles.container, backgroundColor: theme.primaryBg }}>
      {currentScreen !== 'Explore' && (
        <Pressable
          style={{ ...styles.button, backgroundColor: theme.accent }}
          onPress={() => {
            navigation.navigate('Explore')
          }}>
          <Text style={styles.text}>Explore</Text>
        </Pressable>
      )}
      {currentScreen !== 'ItemsScreen' && (
        <Pressable
          style={{ ...styles.button, backgroundColor: theme.accent }}
          onPress={() => {
            navigation.navigate('ItemsScreen')
          }}>
          <Text style={styles.text}>Items</Text>
        </Pressable>
      )}
      {currentScreen !== 'Profile' && (
        <Pressable
          style={{ ...styles.button, backgroundColor: theme.accent }}
          onPress={() => {
            navigation.navigate('Profile')
          }}>
          <Text style={styles.text}>Profile</Text>
        </Pressable>
      )}
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
