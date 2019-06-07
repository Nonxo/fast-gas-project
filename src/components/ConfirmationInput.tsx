import React from 'react'
import { Component } from 'react'
import { Color } from '../constants'
import { TextInput, StyleSheet, View } from 'react-native'

interface Props {
  onTextChanged(value: number[]): void
}

interface State {
  digits: number[]
}

export default class ConfirmationInput extends Component<Props, State> {

  state = {
    digits: []
  }

  firstInput = React.createRef<TextInput>()
  secondInput = React.createRef<TextInput>()
  thirdInput = React.createRef<TextInput>()
  fourthInput = React.createRef<TextInput>()
  fifthInput = React.createRef<TextInput>()
  sixthInput = React.createRef<TextInput>()

  componentDidMount() {
    if (this.firstInput.current) {
      this.firstInput.current.focus()
    }
  }

  private handleChangeText = (value: string, index: number) => {
    const digits: any = this.state.digits.slice(0)
    digits[index] = value 

    if (value !== null && value.trim() !== '') {
      this.moveCursorForward(index)
    }
    this.setState({ digits })
    this.props.onTextChanged(digits)
  }

  private moveCursorForward(index: number) {
    switch (index) {
      case 0:
        if (this.secondInput.current) {
          this.secondInput.current.focus()
        }
        break
      case 1: 
        if (this.thirdInput.current) {
          this.thirdInput.current.focus()
        }
        break
      case 2: 
        if (this.fourthInput.current) {
          this.fourthInput.current.focus()
        }
        break
      case 3: 
      if (this.fifthInput.current) {
        this.fifthInput.current.focus()
      }
      break
      case 4: 
      if (this.sixthInput.current) {
        this.sixthInput.current.focus()
      }
      break
    }
  }

  render () {
    return (
      <View style={styling.textWrapper}>

        <TextInput
          maxLength={1}
          placeholder='4'
          ref={this.firstInput}
          style={styling.textInput}
          keyboardType='number-pad'
          onChangeText={(text) => this.handleChangeText(text, 0)} 
        />

        <TextInput
          maxLength={1}
          placeholder='4'
          ref={this.secondInput}
          style={styling.textInput}
          keyboardType='number-pad'
          onChangeText={(text) => this.handleChangeText(text, 1)} 
        />

        <TextInput
          maxLength={1}
          placeholder='4'
          ref={this.thirdInput}
          style={styling.textInput}
          keyboardType='number-pad' 
          onChangeText={(text) => this.handleChangeText(text, 2)} 
        />

        <TextInput
          maxLength={1}
          placeholder='4'
          ref={this.fourthInput}
          style={styling.textInput}
          keyboardType='number-pad'
          onChangeText={(text) => this.handleChangeText(text, 3)} 
        />

        <TextInput
          maxLength={1}
          placeholder='4'
          ref={this.fifthInput}
          style={styling.textInput}
          keyboardType='number-pad'
          onChangeText={(text) => this.handleChangeText(text, 4)} 
        />

        <TextInput
          maxLength={1}
          placeholder='4'
          ref={this.sixthInput}
          style={styling.textInput}
          keyboardType='number-pad'
          onChangeText={(text) => this.handleChangeText(text, 5)} 
        />

      </View>
    )
  }
}

const styling = StyleSheet.create({
  textWrapper: {
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textInput: {
    width: 35,
    fontSize: 35,
    marginLeft: 8,
    marginRight: 8,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderColor: Color.TEXT_INPUT_UNDERLINE_COLOR,
  }
})
