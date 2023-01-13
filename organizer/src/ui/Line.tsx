import { useColorModeValue, View } from 'native-base'
import Svg, { Path } from 'react-native-svg'

export const Line = () => {
  const color = useColorModeValue('black', 'white')
  return (
    <View>
      <Svg width="150" height="25" viewBox="0 0 145 1" fill="none">
        <Path opacity="0.6" d="M0.5 0.5H144.5" stroke={color} />
      </Svg>
    </View>
  )
}
