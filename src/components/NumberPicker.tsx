import React from 'react'
import { Component } from 'react'
import UIText from './ThemedText'
import { Color, Dimen} from '../constants'
import { Image, StyleSheet, View, TouchableOpacity, GestureResponderEvent } from 'react-native'

/**
 * Allowable properties for this component
 */
interface Props {
  min: number
  max: number
  defaultValue?: number,
  style?: any
  onValueChanged?(value: number): void
}

/**
 * Component state 
 */
interface State {
  value: number
}

/**
 * Number picking component. Allows the selection of numbers within
 * a given MIN and MAX range (Inclusive).
 */
export default class NumberPicker extends Component<Props, State> {

  state = {
    value: this.props.defaultValue || this.props.min
  }

  handleMinusPressed = () => {
    
    let currentValue = this.state.value
    const { min } = this.props
    
    if (currentValue <= min) {
      this.setState({ value: min })
      return
    }
    currentValue--
    
    let { onValueChanged } = this.props
    onValueChanged && onValueChanged(currentValue)
    this.setState({ value: currentValue })
  }

  handlePlusPressed = () => {
    
    let currentValue = this.state.value
    const { max } = this.props

    if (currentValue >= max) {
      this.setState({ value: max })
      return
    }
    currentValue++

    let { onValueChanged } = this.props
    onValueChanged && onValueChanged(currentValue)
    this.setState({ value: currentValue })
  }

  render () {
    const { value } = this.state

    return (
      <View style={[ styling.frame, this.props.style ]}>
        
        <TouchableOpacity style={styling.iconWrapperLeft} onPress={this.handleMinusPressed}>
          <Image
            style={styling.icons}
            resizeMode='contain'
            source={require('../../assets/imgs/minus-symbol.png')}
          />
        </TouchableOpacity>
        
        
        <View style={styling.textWrapper}>
          <UIText style={styling.text}>{value}</UIText>
        </View>

        <TouchableOpacity style={styling.iconWrapperRight} onPress={this.handlePlusPressed}>
          <Image
            style={styling.icons}
            resizeMode='contain'
            source={require('../../assets/imgs/plus-symbol.png')}
          />
        </TouchableOpacity>
        
      </View>
    )
  }

}

/**
 * Styles
 */
const styling = StyleSheet.create({
  icons: {
    width: 10,
    height: 10,
  },
  iconWrapperLeft: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.ACCENT,
    borderTopLeftRadius: Dimen.BUTTON_RADIUS,
    borderBottomLeftRadius: Dimen.BUTTON_RADIUS,
  },
  iconWrapperRight: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.ACCENT,
    borderTopRightRadius: Dimen.BUTTON_RADIUS,
    borderBottomRightRadius: Dimen.BUTTON_RADIUS,
  },
  text: {
    
  },
  textWrapper: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  frame: {
    borderRadius: 4,
    alignSelf: 'stretch',
    flexDirection: 'row',
    height: Dimen.PICKER_HEIGHT,
    backgroundColor: Color.LIGHT_GRAY_BACKGROUND
  }
})