import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ThemeProvider } from './common/context/theme.context'
import { useTheme } from './common/hooks/theme.hook'
import ExploreScreen from './screens/Explore'
import InfoScreen from './screens/ItemInfo'
import ItemsScreen from './screens/Items'
import Profile from './screens/Profile'
import { RootStackParams } from './types/rootStack.type'

const RootStack = createNativeStackNavigator<RootStackParams>()

const App = () => {
  const theme = useTheme()
  const style = {
    backgroundColor: theme.primaryBg,
    color: theme.color
  }
  return (
    <ThemeProvider>
      <NavigationContainer>
        <RootStack.Navigator {...style}>
          <RootStack.Screen name="Explore" component={ExploreScreen} />
          <RootStack.Screen name="ItemsScreen" component={ItemsScreen} />
          <RootStack.Screen name="Profile" component={Profile} />
          <RootStack.Screen name="InfoScreen" component={InfoScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
