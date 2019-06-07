import React from 'react'
import { Component } from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
import { Color, FontStyle} from '../constants'


interface Props {
  style?: any
  placeholder: string
}

interface State {
  phoneNumber: string
  countryCode: string
}

export default class UIPhoneInput extends Component<Props, State> {

  state: State = {
    phoneNumber: '',
    countryCode: '',
  }

  /**
   * Phonenumber Input 
   */
  phoneNumberInput = React.createRef<TextInput>()


  componentDidMount() {
    if (this.phoneNumberInput.current) {
      this.phoneNumberInput.current.focus()
    }
  }

  /**
   * Returns the phone number without the country code
   */
  getPhoneNumber = () => {
    return this.state.phoneNumber
  }

  /**
   * Returns the country code
   */
  getCountryCode = () => {
    return this.state.countryCode
  }

  handleChangedText = (phoneNumber: string) => {
    this.setState({ phoneNumber })
  }

  /**
   * Determines if all input fields have values in them
   */
  allFieldsHaveValues() {
    const { phoneNumber, countryCode } = this.state
    return phoneNumber.trim() != '' && countryCode.trim() != ''
  }

  render () {
    
    let { style, placeholder } = this.props

    return (
      <View style={styling.wrapper}>
        <TextInput
          maxLength={4}
          editable={false}
          keyboardType='number-pad'
          placeholder='+234'
          style={[ styling.textInput, style ]} />

        <TextInput
          autoFocus
          maxLength={10}
          keyboardType='number-pad'
          placeholder={placeholder}
          ref={this.phoneNumberInput}
          style={[ styling.textInput, styling.textInputTwo, style ]} />
      </View>        
    )
  }
}

const styling = StyleSheet.create({
  wrapper: {
    marginLeft: 20,
    marginRight: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    flex: 0.3,
    height: 40,
    fontSize: 22,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
    fontFamily: FontStyle.LIGHT  as any,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Color.TEXT_INPUT_UNDERLINE_COLOR,
  },
  textInputTwo: {
    flex: 0.7,
    textAlign: 'left'
  }
})