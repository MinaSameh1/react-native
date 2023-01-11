import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ExploreScreen from './screens/Explore'
import ItemInfoScreen from './screens/ItemInfo'
import ItemsScreen from './screens/Items'
import Profile from './screens/Profile'

export type RootStackParams = {
  Explore: undefined
  Items: undefined
  Profile: undefined
  ItemInfo: {
    name: string
    info: string
    price: number
  }
}

const RootStack = createNativeStackNavigator<RootStackParams>()

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Explore" component={ExploreScreen} />
        <RootStack.Screen name="Items" component={ItemsScreen} />
        <RootStack.Screen name="Profile" component={Profile} />
        <RootStack.Screen name="ItemInfo" component={ItemInfoScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default App
