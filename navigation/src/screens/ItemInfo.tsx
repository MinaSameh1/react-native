import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StyleSheet, View, Text } from 'react-native'
import { useTheme } from '../common/hooks/theme.hook'
import { RootStackParams } from '../types/rootStack.type'

type Props = NativeStackScreenProps<RootStackParams, 'InfoScreen'>

export const ItemInfoScreen: React.FC<Props> = props => {
  const theme = useTheme()

  return (
    <View style={{ ...styles.container, backgroundColor: theme.primaryBg }}>
      <Text style={[styles.title, theme]}>
        Info on {props.route.params.name}
      </Text>
      <View>
        <Text style={theme}>info: {props.route.params.info}</Text>
        <Text style={theme}>price: {props.route.params.price}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 35,
    flex: 1
  },
  title: {
    fontSize: 24,
    marginTop: 6,
    fontWeight: 'bold'
  }
})

export default ItemInfoScreen
