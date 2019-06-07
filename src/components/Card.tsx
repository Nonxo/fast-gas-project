import React from 'react'
import UIText from './ThemedText'
import Color from '../constants/Color'
import FontStyle from '../constants/FontStyle'
import { StyleSheet, TouchableOpacity, GestureResponderEvent } from 'react-native'

interface Props {
  icon?: any
  title?: string
  style?: any
  onPress?(event: GestureResponderEvent): void
}

const Card = (props: Props) => (
  <TouchableOpacity style={[ styling.box, props.style ]} onPress={props.onPress}>
      {props.icon}
    <UIText size={14} weight={FontStyle.REGULAR}>{props.title}</UIText>
  </TouchableOpacity>
)

const styling = StyleSheet.create({
  box: {
    elevation: 4,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    shadowOffset: { 
      width: 0,
      height: 5
    },
    shadowRadius: 5,
    shadowOpacity: .5,
    justifyContent: 'center',
    backgroundColor: Color.WHITE,
    shadowColor: Color.CARD_SHADOW,
  }
})

export default Card
