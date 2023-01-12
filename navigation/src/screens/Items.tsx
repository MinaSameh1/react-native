import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { ItemCard } from '../components/ItemCard'
import { Menu } from '../components/Menu'
import { RootStackParams } from '../types/rootStack.type'

type Props = NativeStackScreenProps<RootStackParams, 'ItemInfoScreen'>

export default function ItemsScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Items Screen</Text>
      <ScrollView>
        <ItemCard
          name="test item"
          onPress={() => {
            navigation.navigate('ItemInfoScreen', {
              name: 'test item',
              info: 'An item that added for testing',
              price: 30.0
            })
          }}
        />
        <ItemCard
          name="microphone"
          onPress={() => {
            navigation.navigate('ItemInfoScreen', {
              name: 'microphone',
              info: 'a great microphone',
              price: 34.1
            })
          }}
        />
        <ItemCard
          name="food i guess"
          onPress={() => {
            navigation.navigate('ItemInfoScreen', {
              name: 'food i guess',
              info: 'this is food, meant to be eaten',
              price: 500
            })
          }}
        />
        <ItemCard
          name="test 2"
          onPress={() => {
            navigation.navigate('ItemInfoScreen', {
              name: 'test 2',
              info: 'Great test',
              price: 13.5
            })
          }}
        />
        <ItemCard
          name="speaker"
          onPress={() => {
            navigation.navigate('ItemInfoScreen', {
              name: 'speaker',
              info: 'Great speaker has high sound quality',
              price: 10.4
            })
          }}
        />
        <ItemCard
          name="chicken"
          onPress={() => {
            navigation.navigate('ItemInfoScreen', {
              name: 'chicken',
              info: 'this is food, meant to be eaten',
              price: 500
            })
          }}
        />
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
