import { Switch, Text, HStack, useColorMode } from 'native-base'

export default function ToggleMode() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack alignItems="center" space={2}>
      <Text>Dark</Text>
      <Switch isChecked={colorMode === 'light'} onToggle={toggleColorMode} />
      <Text>Light</Text>
    </HStack>
  )
}
