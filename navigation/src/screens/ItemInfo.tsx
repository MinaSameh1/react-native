import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StyleSheet, View, Text } from 'react-native'
import { RootStackParams } from '../main'

type Props = NativeStackScreenProps<RootStackParams, 'ItemInfo'>

export const ItemInfoScreen: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Info on {props.route.params.name}</Text>
      <View>
        <Text style={styles.text}>info: {props.route.params.info}</Text>
        <Text style={styles.text}>price: {props.route.params.price}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 24
  },
  title: {
    fontSize: 24,
    marginTop: 6,
    fontWeight: 'bold',
    color: '#000'
  },
  text: {
    color: '#000'
  }
})

export default ItemInfoScreen
