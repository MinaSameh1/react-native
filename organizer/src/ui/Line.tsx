import { View } from 'native-base'
import Svg, { Path } from 'react-native-svg'

export const Line = () => {
  return (
    <View>
      <Svg width="150" height="1" viewBox="0 0 145 1" fill="none">
        <Path opacity="0.1" d="M0.5 0.5H144.5" stroke="white" />
      </Svg>
    </View>
  )
}
