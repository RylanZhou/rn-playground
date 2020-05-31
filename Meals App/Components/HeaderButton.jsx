import React from 'react'
import { Platform } from 'react-native'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../Constants'

const MyHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      color={Platform.OS === 'android' ? 'white' : COLORS.primary}
      iconSize={23}
    />
  )
}

export default MyHeaderButton
