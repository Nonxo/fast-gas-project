import React from 'react'
import { Text } from 'react-native'
import AppFont from '../constants/AppFont'
import FontStyle from '../constants/FontStyle'
import { Color } from '../constants';

interface Props {
  style?: any
  size?: number
  children?: any
  weight?: FontStyle
}

const UIText = (props: Props) => (
  <Text style={[ 
    props.style, { 
      fontSize: props.size || 16, 
      fontFamily: props.weight || AppFont.MONTSERRAT_LIGHT }]}>
    { props.children }
  </Text>
)

export default UIText
