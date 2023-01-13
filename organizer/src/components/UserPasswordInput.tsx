import { Text, VStack } from 'native-base'
import { PasswordInput } from '../ui/PasswordInput'

interface Props {
  name: string
  onChangeText?: (txt: string) => void
  placeholder?: string
}

export const UserPasswordInput = ({
  name,
  onChangeText,
  placeholder
}: Props) => {
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
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </VStack>
  )
}
