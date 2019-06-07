import React from 'react'
import { Component } from 'react'
import { Color, FontStyle} from '../constants'
import { TextInput, StyleSheet, KeyboardTypeOptions } from 'react-native'

interface Props {
  style?: any
  placeholder: string
  autoCorrect?: boolean
  secureTextEntry?: boolean
  keyboardType: KeyboardTypeOptions
}

interface State {
 isFocused: boolean
}

export default class ThemedTextInput extends Component<Props, State> {

  textInput = React.createRef<TextInput>()

  state = {
    isFocused: false
  }

  onChangeText = (value: any) => {

  }

  handleOnBlur = () => {
    this.setState({ isFocused: false })
  }

  handleOnFocus = () => {
    this.setState({ isFocused: true })
  }

  focus() {
    if (this.textInput.current) {
      this.textInput.current.focus()
    }
  }

  render () {
    
    const { isFocused } = this.state
    const { style, keyboardType, placeholder, autoCorrect, secureTextEntry } = this.props

    return (
      <TextInput
        ref={this.textInput}
        keyboardType={keyboardType}
        placeholder={placeholder}
        onChangeText={this.onChangeText}
        autoCorrect={autoCorrect || false}
        onBlur={this.handleOnBlur}
        onFocus={this.handleOnFocus}
        secureTextEntry={secureTextEntry}
        style={[styling.input, style, { borderColor: (isFocused) ? Color.ACCENT : Color.TEXT_INPUT_UNDERLINE_COLOR }]}
      />
    )
  }
}

const styling = StyleSheet.create({
  input: {
    height: 40,
    fontSize: 14,
    alignSelf: 'stretch',
    fontFamily: FontStyle.LIGHT  as any,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Color.TEXT_INPUT_UNDERLINE_COLOR,
  }
})