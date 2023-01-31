import { StatusBar, StatusBarStyle } from 'react-native'
import useColorModeValue from '../common/hooks/useColorModeValue'

const CustomStatusBar = () => {
  const statusBarStyle = useColorModeValue<StatusBarStyle>(
    'dark-content',
    'light-content'
  )
  const color = useColorModeValue('#fff', '#000')

  return <StatusBar backgroundColor={color} barStyle={statusBarStyle} />
}

export default CustomStatusBar
