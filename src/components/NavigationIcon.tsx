import React from 'react'
import { Image, TouchableOpacity } from 'react-native'

interface Props {
  navigation?: any
}

const NavigationIcon = (props: Props) => (
  <TouchableOpacity activeOpacity={1} onPress={() => props.navigation.toggleDrawer() }>
    <Image
      resizeMode='contain'
      source={require('../../assets/imgs/menu.png')}
    />
  </TouchableOpacity>
)

export default NavigationIcon