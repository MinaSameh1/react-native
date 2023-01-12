import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { ItemCard } from '../components/ItemCard'
import { Menu } from '../components/Menu'
import { useTheme } from '../common/hooks/theme.hook'
import { RootStackParams } from '../types/rootStack.type'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = NativeStackScreenProps<RootStackParams, 'Explore'>

const ExploreScreen = ({ navigation }: Props) => {
  const theme = useTheme()
  return (
    <View style={{ ...styles.container, backgroundColor: theme.primaryBg }}>
      <ScrollView>
        <Text style={{ ...styles.screenTitle, color: theme.color }}>
          These are our best items!
        </Text>
        <View>
          <Text style={{ ...styles.title, color: theme.color }}>
            Items you might like
          </Text>
          <View
            style={{ ...styles.content, backgroundColor: theme.secondaryBg }}>
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
                  info: 'Good microphonE!',
                  price: 251
                })
              }}
            />
            <ItemCard
              name="food i guess"
              onPress={() => {
                navigation.navigate('InfoScreen', {
                  name: 'food i guess',
                  info: 'foodddd tasty',
                  price: 4.5
                })
              }}
            />
          </View>

          <Text style={{ ...styles.title, color: theme.color }}>
            Most popular
          </Text>
          <View
            style={{ ...styles.content, backgroundColor: theme.secondaryBg }}>
            <ItemCard
              name="test 2"
              onPress={() => {
                navigation.navigate('InfoScreen', {
                  name: 'test 2',
                  info: 'Good test!',
                  price: 42.5
                })
              }}
            />
            <ItemCard
              name="speaker"
              onPress={() => {
                navigation.navigate('InfoScreen', {
                  name: 'speaker',
                  info: 'Great speaker loud and works',
                  price: 40.5
                })
              }}
            />
            <ItemCard
              name="chicken"
              onPress={() => {
                navigation.navigate('InfoScreen', {
                  name: 'chicken',
                  info: 'ITS RAW',
                  price: 95.4
                })
              }}
            />
          </View>
        </View>
        <Menu />
      </ScrollView>
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
