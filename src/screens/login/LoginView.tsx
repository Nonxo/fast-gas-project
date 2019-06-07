import React, { PureComponent } from 'react'
import { Color } from '../../constants'
import Button from '../../components/Button'
import Routes from '../../navigation/Routes'
import ThemedText from '../../components/ThemedText'
import ThemedTextInput from '../../components/ThemedTextInput'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

interface Props {
  navigation?: any
  onLinkPress?(): void
}

export default class LoginView extends PureComponent<Props, any> {

  handleUserLogin = () => {
    const { navigation } = this.props.navigation
    navigation.navigate(Routes.HOME)
  }

  render () {
    return (
      <View style={styling.wrapper}>
        <FieldArea />
        <Button
          title='login'
          style={{ marginBottom: 8 }}
          onPress={this.handleUserLogin}
        />
        <ActionArea
          onLinkPressed={this.props.onLinkPress}
        />
      </View>
    )
  }
}

const FieldArea = () => (
  <View style={styling.fieldArea}>
    <ThemedTextInput
     style={styling.emailInput}
      placeholder='Email'
      keyboardType='email-address'
     />
     <ThemedTextInput
      secureTextEntry
      placeholder='Password'
      keyboardType='default'
     />
  </View>
)

const ActionArea = ({ onLinkPressed }: any) => (
  <View style={styling.actionArea}>
    <ThemedText size={12} style={styling.notRegisteredText}>
      Not Registered yet?
    </ThemedText>
    <TouchableOpacity onPress={onLinkPressed}>
      <ThemedText size={12} style={styling.link}>Sign up now</ThemedText>
    </TouchableOpacity>
  </View>
)

const styling = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  actionArea: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notRegisteredText: {
    marginRight: 7,
  },
  link: {
    color: Color.DARK_GRAY
  },
  fieldArea: {
    marginTop: 15,
    marginBottom: 60,
  },
  emailInput: {
    marginBottom: 10,
  }
})