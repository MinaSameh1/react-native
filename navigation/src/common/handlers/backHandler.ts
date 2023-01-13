import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { BackHandler } from 'react-native'
import { RootStackParams } from '../../types/rootStack.type'

export const backHandler = (
  navigation: NativeStackNavigationProp<RootStackParams>
) =>
  BackHandler.addEventListener('hardwareBackPress', function () {
    if (navigation.canGoBack()) {
      navigation.goBack()
      return true
    }
    return false
  })

export default backHandler
