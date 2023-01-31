import { View } from 'react-native'
import { Text } from 'react-native-paper'

export function HomeScreen() {
  return (
    <View className="justify-center flex-1 items-center light:bg-white dark:bg-black">
      <Text className="mt-2 text-lg text-black dark:text-white">
        this is home
      </Text>
    </View>
  )
}
