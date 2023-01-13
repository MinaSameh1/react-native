import { Text, Center, useColorModeValue, VStack } from 'native-base'
import ToggleMode from '../components/ToggleMode'
import { UserInput } from '../components/UserInput'

export const MainScreen = () => {
  const bg = useColorModeValue('primaryLight.600', 'primaryDark.600')
  const textColor = useColorModeValue('black', 'white')

  return (
    <Center flex={1} bg={bg}>
      <VStack flex={1} bg={bg}>
        <Text fontSize={24} color={textColor}>
          Hello, World!
        </Text>
        <UserInput name="Username" />
        <ToggleMode />
      </VStack>
    </Center>
  )
}
