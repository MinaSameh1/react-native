import 'react-native'
import React from 'react'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
import { HomeScreen } from '../screens/HomeScreen'
import { Text } from 'react-native-paper'

it('renders correctly', () => {
  const testRend = renderer.create(<HomeScreen />)
  const testInstance = testRend.root
  expect(testInstance.findByType(Text).props.children).toEqual('this is home')
})
