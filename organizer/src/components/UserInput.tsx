import { Input, Text, VStack } from 'native-base'

interface Props {
  name: string
  onChange?: () => void
}

export const UserInput = ({ name, onChange }: Props) => {
  return (
    <VStack>
      <Text fontStyle={'normal'} color={'gray.500'}>
        {name}
      </Text>
      <Input
        _dark={{ backgroundColor: 'primaryDark.550' }}
        onChange={onChange}
      />
    </VStack>
  )
}
