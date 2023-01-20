import { StatusBar, StatusBarStyle } from 'react-native'
import useColorModeValue from '../common/hooks/useColorModeValue'

interface Props {
  children: React.ReactNode
}

export const AppContainer = ({ children }: Props) => {
  const statusBarStyle = useColorModeValue<StatusBarStyle>(
    'dark-content',
    'light-content'
  )
  const color = useColorModeValue('#fff', '#000')

  return (
    <>
      <StatusBar backgroundColor={color} barStyle={statusBarStyle} />
      {children}
    </>
  )
}
