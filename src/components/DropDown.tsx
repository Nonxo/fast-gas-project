import React from 'react'
import { Component } from 'react'
import ThemedText from './ThemedText'
import { Color, Dimen, FontStyle} from '../constants'
import { Image, StyleSheet, View, TouchableOpacity, GestureResponderEvent } from 'react-native'

interface Props {
  style?: any
  label: string
  onValueChanged?(value: any): void
  onPress?(event: GestureResponderEvent): void
}

export default class DropDown extends Component<Props, {}> {

  handleOnValueChanged = () => {
    
  }

  render () {
    const { label, style, onPress } = this.props

    return (
      <TouchableOpacity style={[styling.dropDown, style ]} onPress={onPress}>
        <ThemedText
          weight={FontStyle.REGULAR}
          style={styling.label}>
            { `${label.slice(0, 30)}${(label.length > 30) ? '...' : ''}` }
        </ThemedText>
        <Image
          resizeMode='contain'
          style={styling.icon}
          source={require('../../assets/imgs/down-chevron.png')}
        />
      </TouchableOpacity>
    )
  }
}

const styling = StyleSheet.create({
  dropDown: {
    height: 60,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: Dimen.BUTTON_RADIUS,
    backgroundColor: Color.LIGHT_GRAY
  },
  label: {
    flex: 0.8,
    marginLeft: 20,
    color: Color.BLACK,
  },
  icon: {
    width: 15,
    height: 15,
    flex: 0.2
  }
})

