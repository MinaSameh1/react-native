import {
  Box,
  Button,
  HStack,
  Text,
  useColorModeValue,
  VStack
} from 'native-base'
import ToggleMode from '../components/ToggleMode'
import { UserInput } from '../components/UserInput'
import { Line } from '../ui/Line'
import { StatusBar } from '../ui/StatusBar'
import Icon from 'react-native-vector-icons/AntDesign'
import { UserPasswordInput } from '../components/UserPasswordInput'

interface Props {}

export const LoginScreen: React.FC<Props> = _props => {
  const bg = useColorModeValue('primaryLight.600', 'primaryDark.600')

  return (
    <VStack
      flex={1}
      bg={bg}
      space="md"
      alignItems="center"
      justifyContent="center">
      <StatusBar />
      <Box alignItems="center" justifyContent="center">
        <Text
          fontFamily="heading"
          fontWeight="600"
          fontSize={26}
          paddingBottom={5}>
          Login To Organize
        </Text>
        <Text color="gray.500">
          Organize is an app that was made to help you organize your life.
        </Text>
      </Box>
      <Box paddingTop={5}>
        <UserInput name="Username" placeholder="username" />
        <UserPasswordInput name="Password" placeholder="password" />
        <HStack paddingTop={10} space={2}>
          <Line />
          <Text>or</Text>
          <Line />
        </HStack>
        <HStack
          alignItems="center"
          justifyContent="center"
          space={2}
          marginTop={5}
          marginBottom={5}>
          <Button bg="gray.600" flex={1}>
            <Icon name="apple1" size={24} />
          </Button>
          <Button bg="#3B5998" flex={1}>
            <Icon name="facebook-square" size={24} />
          </Button>
          <Button bg="#4385F4" flex={1}>
            <Icon name="google" size={24} />
          </Button>
        </HStack>
        <Text
          color={'gray.500'}
          underline={true}
          alignSelf="center"
          paddingBottom={2}>
          Forget password?
        </Text>
      </Box>
      <Box w="80%" paddingTop={10}>
        <Button>Login</Button>
        <Text
          color={'gray.500'}
          paddingTop={5}
          underline={true}
          alignSelf="center">
          Register
        </Text>
      </Box>
    </VStack>
  )
}
