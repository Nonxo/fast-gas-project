import React from 'react'
import { Component } from 'react'
import { FontStyle } from '../../constants'
import styling from './style'
import ThemedView from '../../components/ThemedView'
import ThemedTextInput from '../../components/ThemedTextInput'
import { View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'

import Button from '../../components/Button'
import ThemedText from '../../components/ThemedText'
import Routes from '../../navigation/Routes';

interface Props {
  navigation?: any
}

export default class RegisterView extends Component<Props, any> {

  textInput = React.createRef<ThemedTextInput>()

  componentDidMount() {
    if (this.textInput.current) {
    }
  }

  handleUserRegistration = () => {
    const { navigation } = this.props.navigation
    navigation.navigate(Routes.OTP)
  }

  render () {
    return (
      <ThemedView>
        <KeyboardAvoidingView behavior='padding' style={styling.wrapperView}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styling.contentBox}>

              <ThemedTextInput
                keyboardType='default'
                placeholder='First name'
                style={styling.textInput}
              />

              <ThemedTextInput
                keyboardType='default'
                placeholder='Last name'
                style={styling.textInput}
              />

              <ThemedTextInput
                placeholder='Email'
                ref={this.textInput}
                style={styling.textInput}
                keyboardType='email-address'
              />

              <ThemedTextInput
                placeholder='Phone number'
                ref={this.textInput}
                style={styling.textInput}
                keyboardType='phone-pad'
              />

              <ThemedTextInput
                placeholder='Password'
                ref={this.textInput}
                style={styling.textInput}
                keyboardType='default'
                secureTextEntry
              />

              <ThemedText size={12} style={styling.titleText}>
                You will receive a code from SMS shortly after you tap 
                  <ThemedText size={12} weight={FontStyle.SEMI_BOLD} style={styling.termsText}> 
                    {' '} Next
                  </ThemedText>
              </ThemedText>

              <Button
                title='next'
                style={styling.button}
                onPress={this.handleUserRegistration}
              />

            </View>
          </TouchableWithoutFeedback>

        </KeyboardAvoidingView>
      </ThemedView>
    )
  }
}