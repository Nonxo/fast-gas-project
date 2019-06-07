import React from 'react'
import { Component } from 'react'
import {View, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native'
import ThemedView from '../../components/ThemedView'
import Button from '../../components/Button'
import { FontStyle, Color } from '../../constants'
import Style from '../../constants/Style'


import HeaderTitle from '../../components/HeaderTitle'
import NavigationIcon from '../../components/NavigationIcon'
import PhoneInput from '../../components/PhoneTextInput'

interface Props {
  navigation: any

}

export default class PromotionScreen extends Component<Props, {}> {

  static navigationOptions =  ({ navigation }: any) => ({
    headerTitle: <HeaderTitle title='Promotions' />,
    headerTintColor: Color.WHITE,
    headerStyle: Style.toolbarStyleAccent,
    headerLeft: <NavigationIcon {...{ navigation }} />,
  })

  moveToHomeScreen = () => {
    this.props.navigation.push('Home');
  }

  render () {
    return (
      <ThemedView>
        <KeyboardAvoidingView behavior='padding' style={style.wrapperView}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={style.contentBox}>

              <PhoneInput placeholder='Add promo code' style={style.textInput}/>

              <Button title='Add' style={style.button} onPress={this.moveToHomeScreen}/>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ThemedView>

    )
  }
}

const style = StyleSheet.create({

  textInput: {
    marginTop: 15,
    marginBottom: 15,
    justifyContent: 'center'
  },

  button: {
    marginTop: 50,
  },

  contentBox: {
    flex: 1,
    justifyContent: 'center',
  },

  wrapperView: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center'

  },

})
