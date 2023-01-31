import { NavigationContainer } from '@react-navigation/native'
import { Provider as PaperProvider } from 'react-native-paper'

interface Props {
  children: React.ReactNode
}

export const AppContainer = ({ children }: Props) => {
  return (
    <>
      <NavigationContainer>
        <PaperProvider>{children}</PaperProvider>
      </NavigationContainer>
    </>
  )
}
