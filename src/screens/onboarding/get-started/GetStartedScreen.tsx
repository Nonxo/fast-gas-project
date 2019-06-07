import React from 'react'
import { Component } from 'react'
import { View } from 'react-native'
import styling from './get-started-style'
import Logo from '../../../components/Logo'
import ThemedText from '../../../components/ThemedText'
import ThemedView from '../../../components/ThemedView'
import Button from '../../../components/Button'


interface Props {
  navigation: any
}

export default class GetStartedScreen extends Component<Props, {}> {

  static navigationOptions = ({ navigation }: any) => {
    return {
      headerBackTitle: 'Enter Phone Number'
    }
  }

  moveToPhoneScreen = () => {
    this.props.navigation.push('Phone')
  }

  render() {
    return (
      <ThemedView style={styling.container}>
        <Logo style={styling.logo}/>
        <View style={styling.textWrapper}>
            <ThemedText style={styling.descripText} size={40}>
                We need your {'\n'}
                details to{'\n'}
                get started {'\n'}
            </ThemedText>
        </View>


        <View>
            <Button
              style={styling.button}
              title='Get Started'
              color='transparent'
              onPress={this.moveToPhoneScreen}
            />
        </View>

      </ThemedView>
    )
  }
}