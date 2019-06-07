import React from 'react'
import { Component } from 'react'
import { 
  View, 
  Keyboard, 
  KeyboardAvoidingView, 
  TouchableWithoutFeedback, 
  Platform
} from 'react-native'

import styling from './style'
import ThemedView from '../../../components/ThemedView'
import ThemedText from '../../../components/ThemedText'
import Button from '../../../components/Button'
import { FontStyle, Color } from '../../../constants'
import ConfirmationInput from '../../../components/ConfirmationInput'
import HeaderTitle from '../../../components/HeaderTitle';
import Routes from '../../../navigation/Routes';


interface Props {
  navigation: any
}

export default class OTPConfirmationScreen extends Component<Props, {}> {

  static navigationOptions = {
    headerStyle: {
      height: 50,
      borderBottomWidth: 0,
      elevation: 0,
    },
    headerTitle: Platform.OS == 'android' ? <HeaderTitle title='Enter code' tintColor={Color.BLACK} /> : null,
    headerTitleStyle: {
      fontFamily: FontStyle.LIGHT as any
    },
    headerTintColor: Color.ACCENT,
  }

  handleTextChanged = (value: any) => {

  }

  moveToProfileScreen = () => {
    this.props.navigation.navigate(Routes.CONFIRMATION, {
      title: 'Sign up complete',
      description: `Thank you for signing up, \n start placing orders now`
    })
  }

  render () {
    return (
      <ThemedView>
        <KeyboardAvoidingView behavior='padding' style={styling.wrapperView}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styling.contentBox}>

                <ConfirmationInput
                  onTextChanged={this.handleTextChanged}
                />

                <ThemedText size={14} style={styling.textBody}>
                  Text message sent to <ThemedText size={14} weight={FontStyle.SEMI_BOLD} style={styling.phoneNumberText}>+2349898948394</ThemedText> {'\n'}
                  Enter code from SMS {'\n'}
                  Resend SMS in 30
                </ThemedText>

                <Button
                  title='Complete sign up'
                  style={styling.button}
                  onPress={this.moveToProfileScreen}
                />

              </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ThemedView>
    )
  }
}
