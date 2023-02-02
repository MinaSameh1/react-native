import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { HomeScreen } from '../screens/HomeScreen'

type BotTabNav = {
  Home: undefined
}

const Tab = createMaterialBottomTabNavigator<BotTabNav>()

export function BottomTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  )
}
