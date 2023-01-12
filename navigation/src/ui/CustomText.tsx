import React from 'react'
import { Text, TextStyle } from 'react-native'
import { useTheme } from '../common/hooks/theme.hook'

interface Props {
  children: React.ReactNode
  style?: TextStyle
}

export const CustomText: React.FC<Props> = ({ children, style }) => {
  const theme = useTheme()
  return <Text style={[theme, style]}>{children}</Text>
}
