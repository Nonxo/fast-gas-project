import React from 'react'
import ThemedText from './ThemedText'
import { FontStyle } from '../constants'
import { TouchableOpacity, GestureResponderEvent } from 'react-native'

interface Props {
  title: string
  style?: any
  size?: number
  weight?: FontStyle
  containerStyle?: any
  onPress?(event: GestureResponderEvent): void
}

const ClickableText = (props: Props) => (
  <TouchableOpacity style={props.containerStyle} onPress={props.onPress}>
    <ThemedText {...{props}} style={props.style}>{props.title}</ThemedText>
  </TouchableOpacity>
)

export default ClickableText
