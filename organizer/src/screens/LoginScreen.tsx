import {
  Box,
  Button,
  Icon,
  HStack,
  Text,
  useColorModeValue,
  VStack
} from 'native-base'
import { useState } from 'react'
import AntIcon from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Login } from '../common/firebase/login'
import { UserInput } from '../components/UserInput'
import { UserPasswordInput } from '../components/UserPasswordInput'
import { Line } from '../ui/Line'
import { StatusBar } from '../ui/StatusBar'
import { UserError } from '../utils/UserError'

interface Props {}

export const LoginScreen: React.FC<Props> = _props => {
  const bg = useColorModeValue('primaryLight.600', 'primaryDark.600')
  const [error, setError] = useState<string | null>()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  function handleEmailInput(txt: string): void {
    if (txt !== '') return setEmail(txt)
  }

  function handlePassInput(txt: string): void {
    if (txt !== '') return setPass(txt)
  }

  async function handleLogin() {
    try {
      setError(null)
      const info = await Login(email, pass)
      console.log(info)
    } catch (e) {
      if (e instanceof UserError) setError(e.getMessage())
    }
  }

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
        <UserInput
          name="Email"
          placeholder="email"
          onChangeText={handleEmailInput}
        />
        <UserPasswordInput
          name="Password"
          placeholder="password"
          onChangeText={handlePassInput}
        />
        {error && (
          <HStack justifyContent="center" alignItems="center" paddingTop={2}>
            <Icon
              as={<MaterialIcons name="error" />}
              size={4}
              mr="2"
              color="red.500"
            />
            <Text color="red.500" fontWeight="600" underline={true}>
              {error}
            </Text>
          </HStack>
        )}
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
            <AntIcon name="apple1" color="#fff" size={24} />
          </Button>
          <Button bg="#3B5998" flex={1}>
            <AntIcon name="facebook-square" color="#fff" size={24} />
          </Button>
          <Button bg="#4385F4" flex={1}>
            <AntIcon name="google" color="#fff" size={24} />
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
        <Button onPress={handleLogin}>Login</Button>
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
