import { Input, Text, VStack } from 'native-base'

interface Props {
  name: string
  onChange?: () => void
}

export const UserInput = ({ name, onChange }: Props) => {
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
        _dark={{ backgroundColor: 'primaryDark.550' }}
        borderRadius={5}
        borderColor={'gray.500'}
        onChange={onChange}
      />
    </VStack>
  )
}
