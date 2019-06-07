import React, { PureComponent } from 'react'
import { View, StyleSheet, TouchableOpacity, GestureResponderEvent } from 'react-native'
import { Color, FontStyle } from '../constants'
import ThemedText from '../components/ThemedText'


const Defaults = {
  inactiveColor: Color.WHITE,
  activeTextColor: Color.WHITE,
  inactiveTextColor: Color.TEXT_GRAY,
  activeColor: Color.TOGGLE_ACTIVE_COLOR,
}

interface Props {
  style?: any
  activeIndex?: number,
  labels: Array<string>
  activeColor?: string
  inactiveColor?: string
  activeTextColor?: string
  inactiveTextColor?: string
  onActiveIndexChanged?(value: number): void
}

interface State {
  activeIndex: number
}

export default class Toggle extends PureComponent<Props, State> {

  state = {
    activeIndex: this.props.activeIndex || 0
  }

  handleSwitchChanged = (index: number) => {
    this.setState({ activeIndex: index })
    this.props.onActiveIndexChanged && this.props.onActiveIndexChanged(index)
  }

  render () {
    const { style, labels, activeColor, activeTextColor } = this.props
    return(
      <View style={[styling.wrapper, style]}>
        {(labels && labels.length > 0) &&
          labels.map((label: string, index: number) => {
            return (
              <Label
                key={index}
                text={label}
                active={index == this.state.activeIndex}
                activeColor={activeColor}
                activeTextColor={activeTextColor}
                onValueChanged={() => this.handleSwitchChanged(index)}
              />
            )
          })
        }
      </View>
    )
  }
}

interface LabelProps {
  style?: any
  text: string
  active: boolean
  activeColor?: string
  activeTextColor?: string
  inactiveColor?: string
  inactiveTextColor?: string
  onValueChanged?(event: GestureResponderEvent): void
}

const Label = (props: LabelProps) => {
  const activeColor = (props.active && props.activeColor) ? props.activeColor : Defaults.activeColor
  const activeTextColor = (props.active && props.activeTextColor) ? props.activeTextColor : Defaults.activeTextColor
  const inactiveColor = (!props.active && props.inactiveColor) ? props.inactiveColor : Defaults.inactiveColor
  const inactiveTextColor = (!props.active && props.inactiveTextColor) ? props.inactiveTextColor : Defaults.inactiveTextColor

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={props.onValueChanged}
      style={[styling.label, { backgroundColor: props.active ? activeColor : inactiveColor }]}>
      <ThemedText
        size={14}
        style={[styling.text, { color: props.active ? activeTextColor : inactiveTextColor }]}
        weight={FontStyle.REGULAR}>
        {props.text}
      </ThemedText>
    </TouchableOpacity>
  )
}

const styling = StyleSheet.create({
  wrapper: {
    height: 50,
    borderRadius: 8,
    overflow: 'hidden',
    alignSelf: 'stretch',
    marginHorizontal: 15,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Color.DARK_GRAY,
  },
  label: {
    flex: 0.5,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    
  }
})

