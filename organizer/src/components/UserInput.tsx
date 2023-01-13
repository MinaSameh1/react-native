import { Input, Text, VStack } from 'native-base'

interface Props {
  name: string
  onChangeText?: (txt: string) => void
  placeholder?: string
}

export const UserInput = ({ name, onChangeText, placeholder }: Props) => {
  return (
    <VStack paddingTop={5}>
      <Text
        paddingLeft={3}
        paddingBottom={1}
        fontStyle={'normal'}
        color={'gray.500'}>
        {name}
      </Text>
      <Input
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
