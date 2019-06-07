import React from 'react'
import UIText from './ThemedText'
import Color from '../constants/Color'
import { Dimen, FontStyle } from '../constants'
import { StyleSheet, TouchableOpacity, GestureResponderEvent } from 'react-native'

interface Props {
  style?: any
  title: string
  color?: string
  leftIcon?: any
  textColor?: string
  onPress?(event: GestureResponderEvent): void 
}

const Button = (props: Props) => (
  <TouchableOpacity activeOpacity={.5} style={[styling.btn, props.style ]} onPress={props.onPress}>
    {props.leftIcon && props.leftIcon}
    <UIText size={15} weight={FontStyle.SEMI_BOLD} style={{ color: props.textColor || Color.TEXT_PRIMARY }}>
      {`${props.title.charAt(0).toUpperCase()}${props.title.slice(1)}`}
    </UIText>
  </TouchableOpacity>
)

const styling = StyleSheet.create({
  btn: {
    height: 50,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.ACCENT,
    borderRadius: Dimen.BUTTON_RADIUS,
  }
})

export default Button
