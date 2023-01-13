import { NativeBaseProvider } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'
import '../common/firebase/firebase'
import React from 'react'
import theme from '../config/theme'

interface Props {
  children: React.ReactNode
}

export const AppContainer: React.FC<Props> = ({ children }) => (
  <NavigationContainer>
    <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
  </NavigationContainer>
)

export default AppContainer
