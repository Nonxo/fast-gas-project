import React from 'react'
import { Component } from 'react'
import { 
  View, 
  Keyboard, 
  KeyboardAvoidingView, 
  TouchableWithoutFeedback 
} from 'react-native'
import styling from './style'
import ThemedView from '../../../components/ThemedView'
import ThemedText from '../../../components/ThemedText'
import { FontStyle, Color } from '../../../constants'
import Button from '../../../components/Button'
import PhoneInput from '../../../components/PhoneTextInput'

interface Props {
  navigation: any
}

export default class PhoneNumberScreen extends Component<Props, {}> {

  static navigationOptions = ({ navigation }: any) => {
    return {
      headerStyle: {
        height: 50,
        borderBottomWidth: 0
      },
      headerTintColor: Color.ACCENT,
      headerBackTitle: 'Enter code'
    }
  }

  moveToOtpScreen = () => {
    this.props.navigation.push('OTP')
  }

  render() {
    return (
      <ThemedView>
          <KeyboardAvoidingView behavior='padding' style={styling.wrapperView}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styling.contentBox}>

                <ThemedText
                  style={styling.titleText}
                  weight={FontStyle.SEMI_BOLD}>
                  You'll get an SMS to {'\n'} confirm your number
                </ThemedText>

              <PhoneInput
                placeholder='09099878' 
                style={styling.phoneInput} />

              <Button
                title='next'
                style={styling.button} 
                onPress={this.moveToOtpScreen} />

            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ThemedView>
    )
  }
}
