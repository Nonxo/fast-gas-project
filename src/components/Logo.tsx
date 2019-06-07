import React from 'react'
import { Image } from 'react-native'

interface Props {
  style?: any
}

const Logo = (props: Props) => (
  <Image
    resizeMode='contain'
    style={props.style}
    source={require('../../assets/imgs/logo.png')}
  />
)

export default Logo
