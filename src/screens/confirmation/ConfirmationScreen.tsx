import React from 'react'
import Routes from '../../navigation/Routes'
import Toolbar from '../../components/Toolbar'
import { FontStyle } from '../../constants'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import { View, Image } from 'react-native'
import styling from './style'

interface Props {
  navigation?: any
  title?: string
  description?: string
  onBackPressed?(): void
}

const defaultTitle = `Order submitted`

const defaultDescription = `Your order has been submitted \n successfully, a vendor will \n contact you shortly.`

const ConfirmationScreen = (props: Props) => (
  <ThemedView style={styling.view}>
    <Toolbar onPress={() => (props.onBackPressed && props.onBackPressed()) || props.navigation.navigate(Routes.MAIN)} />
    <ContentArea>
      <ThemedText
        size={20}
        style={styling.boldText}
        weight={FontStyle.SEMI_BOLD}>
          { props.navigation.getParam('title') || defaultTitle}
      </ThemedText>
      <ThemedText size={14} style={styling.lightText}>
        { props.navigation.getParam('description') || defaultDescription}
      </ThemedText>
      <ConfirmIcon />
    </ContentArea>
  </ThemedView>
)

const ContentArea = ({ children }: any) => (
  <View style={styling.contentArea}>{children}</View>
)

const ConfirmIcon = () => (
  <Image
    resizeMode='contain'
    style={styling.confirmIcon}
    source={require('../../../assets/imgs/confirm.png')}
  />
)

export default ConfirmationScreen
