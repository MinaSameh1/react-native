import { NativeBaseProvider } from 'native-base'
import theme from '../config/theme'

interface Props {
  children: React.ReactNode
}

export const AppContainer: React.FC<Props> = ({ children }) => (
  <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
)

export default AppContainer
