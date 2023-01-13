import { Text, VStack } from 'native-base'
import { PasswordInput } from '../ui/PasswordInput'

interface Props {
  name: string
  onChange?: () => void
  placeholder?: string
}

export const UserPasswordInput = ({ name, onChange, placeholder }: Props) => {
  return (
    <VStack paddingTop={5}>
      <Text
        paddingLeft={3}
        paddingBottom={1}
        fontStyle={'normal'}
        color={'gray.500'}>
        {name}
      </Text>
      <PasswordInput
        variant="outline"
        _dark={{ backgroundColor: 'primaryDark.550' }}
        borderRadius={5}
        borderColor={'gray.500'}
        onChange={onChange}
        placeholder={placeholder}
      />
    </VStack>
  )
}
