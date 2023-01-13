import { Input, Text, VStack } from 'native-base'

interface Props {
  name: string
  onChange?: () => void
  placeholder?: string
}

export const UserInput = ({ name, onChange, placeholder }: Props) => {
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
        onChange={onChange}
        placeholder={placeholder}
      />
    </VStack>
  )
}
