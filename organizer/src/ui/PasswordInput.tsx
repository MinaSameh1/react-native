import { Icon, IInputProps, Input } from 'native-base'
import React, { useState } from 'react'
import { Pressable } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

type Props = IInputProps

export const PasswordInput: React.FC<Props> = props => {
  const [show, setShow] = useState(false)

  return (
    <Input
      type={show ? 'text' : 'password'}
      InputRightElement={
        <Pressable onPress={() => setShow(!show)}>
          <Icon
            as={<MaterialIcons name={show ? 'visibility' : 'visibility-off'} />}
            size={5}
            mr="2"
            color="muted.400"
          />
        </Pressable>
      }
      {...props}
      placeholder="Password"
    />
  )
}
