import React from 'react'
import { Component } from 'react'
import { Image, View, StyleSheet } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import { FontStyle, Color } from '../../constants'
import Style from '../../constants/Style'
import Routes from '../../navigation/Routes'
import HeaderTitle from '../../components/HeaderTitle'
import NavigationIcon from '../../components/NavigationIcon'
import ClickableText from '../../components/ClickableText'

import styling from './style'

export default class PaymentScreen extends Component<any, any> {

  static navigationOptions =  ({ navigation }: any) => ({
    headerTitle: <HeaderTitle title='Payments' />,
    headerTintColor: Color.WHITE,
    headerStyle: Style.toolbarStyleAccent,
    headerLeft: <NavigationIcon {...{ navigation }} />,
  })

  render () {
    return (
      <ThemedView>
        <ThemedText style={styling.titleLabel}>Payout methods</ThemedText>
        <ClickableText
          size={17}
          style={styling.textLabel}
          weight={FontStyle.REGULAR}
          containerStyle={styling.clickableText}
          title='New credit or debit card'
        />
        <PaymentCardView />
      </ThemedView>

    )
  }
}

const PaymentCardView = () => (
  <View style={styling.paymentCardView}>
    <Image
      style={styling.cardIcons}
      resizeMode='contain'
      source={require('../../../assets/imgs/vs.png')}
    />
    <Image
      style={styling.cardIcons}
      resizeMode='contain'
      source={require('../../../assets/imgs/mc.png')}
    />
    <Image
      style={styling.cardIcons}
      resizeMode='contain'
      source={require('../../../assets/imgs/ae.png')}
    />
    <Image
      style={styling.cardIcons}
      resizeMode='contain'
      source={require('../../../assets/imgs/discover.png')}
    />
  </View>
)
