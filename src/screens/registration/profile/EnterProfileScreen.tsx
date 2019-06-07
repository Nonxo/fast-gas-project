import React from 'react'
import { Component } from 'react'
import { 
  View, 
  Keyboard, 
  KeyboardAvoidingView, 
  TouchableWithoutFeedback 
} from 'react-native'
import ThemedView from '../../../components/ThemedView'
import ThemedText from '../../../components/ThemedText'
import Button from '../../../components/Button'
import { FontStyle, Color } from '../../../constants'
import ThemedTextInput from '../../../components/ThemedTextInput'

import styling from './style'

interface Props {
  navigation: any
}

export default class EnterProfileScreen extends Component<Props, {}> {

  textInput = React.createRef<ThemedTextInput>()

  static navigationOptions = {
    headerStyle: {
      height: 50,
      borderBottomWidth: 0
    },
    headerTitleStyle: {
      fontFamily: FontStyle.LIGHT as any
    },
    headerTintColor: Color.ACCENT,
  }

  componentDidMount() {
    if (this.textInput.current) {
      this.textInput.current.focus()
    }
  }

  moveToHomeScreen = () => {
    this.props.navigation.navigate('Home')
  }

  render () {
    return (
      <ThemedView>
        <KeyboardAvoidingView behavior='padding' style={styling.wrapperView}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styling.contentBox}>

              <ThemedTextInput
                placeholder='Email'
                ref={this.textInput}
                style={styling.textInput}
                keyboardType='email-address'
              />

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

              <ThemedText size={12} style={styling.titleText}>
                By signing up you agree to our 
                  <ThemedText size={12} weight={FontStyle.SEMI_BOLD} style={styling.termsText}> 
                    {''}  Terms & Conditions 
                  </ThemedText>
              </ThemedText>

              <Button
                title='next'
                style={styling.button}
                onPress={this.moveToHomeScreen}
              />

            </View>
          </TouchableWithoutFeedback>

        </KeyboardAvoidingView>
      </ThemedView>
    )
  }
}
