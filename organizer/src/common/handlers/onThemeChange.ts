import { Appearance } from 'react-native'

export const onThemeChangeHandler = (
  colorMode: string | undefined | null,
  toggleColorMode: () => void
) =>
  Appearance.addChangeListener(perf => {
    if (
      (perf.colorScheme === 'light' && colorMode === 'dark') ||
      (perf.colorScheme === 'dark' && colorMode === 'light')
    )
      toggleColorMode()
  })
