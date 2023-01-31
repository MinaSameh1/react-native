import { AppContainer } from './components/AppContainer'
import { BottomTabNavigator } from './components/NavigationComp'
import CustomStatusBar from './ui/CustomStatusBar'

const App = () => {
  return (
    <AppContainer>
      <CustomStatusBar />
      <BottomTabNavigator />
    </AppContainer>
  )
}

export default App
