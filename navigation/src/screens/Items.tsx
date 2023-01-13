import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { useTheme } from '../common/hooks/theme.hook'
import { ItemCard } from '../components/ItemCard'
import { Menu } from '../components/Menu'
import { RootStackParams } from '../types/rootStack.type'

type Props = NativeStackScreenProps<RootStackParams, 'ItemsScreen'>

export default function ItemsScreen({ navigation }: Props) {
  const theme = useTheme()

  return (
    <View style={styles.container}>
      <Text style={[styles.text, theme]}>Items Screen</Text>
      <ScrollView>
        <ItemCard
          name="test item"
          onPress={() => {
            navigation.navigate('InfoScreen', {
              name: 'test item',
              info: 'An item that added for testing',
              price: 30.0
            })
          }}
        />
        <ItemCard
          name="microphone"
          onPress={() => {
            navigation.navigate('InfoScreen', {
              name: 'microphone',
              info: 'a great microphone',
              price: 34.1
            })
          }}
        />
        <ItemCard
          name="food i guess"
          onPress={() => {
            navigation.navigate('InfoScreen', {
              name: 'food i guess',
              info: 'this is food, meant to be eaten',
              price: 500
            })
          }}
        />
        <ItemCard
          name="test 2"
          onPress={() => {
            navigation.navigate('InfoScreen', {
              name: 'test 2',
              info: 'Great test',
              price: 13.5
            })
          }}
        />
        <ItemCard
          name="speaker"
          onPress={() => {
            navigation.navigate('InfoScreen', {
              name: 'speaker',
              info: 'Great speaker has high sound quality',
              price: 10.4
            })
          }}
        />
        <ItemCard
          name="chicken"
          onPress={() => {
            navigation.navigate('InfoScreen', {
              name: 'chicken',
              info: 'this is food, meant to be eaten',
              price: 500
            })
          }}
        />
      </ScrollView>
      <Menu currentScreen="ItemsScreen" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  text: {
    padding: 16,
    fontSize: 28,
    fontWeight: 'bold'
  }
})
