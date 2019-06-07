import React from 'react'

import { Image } from 'react-native'
import Logo from '../../../components/Logo'
import ThemedView from '../../../components/ThemedView'
import ThemedText from '../../../components/ThemedText'

import styling from '../style'
import { FontStyle } from '../../../constants'

const PageTwo = () => (
  <ThemedView style={styling.container}>
    <Logo style={styling.logo}/>
    <Image
      resizeMode='contain'
      style={styling.largeImage}
      source={require('../../../../assets/imgs/page2.png')}
    />
    <ThemedText style={styling.titleText} size={17} weight={FontStyle.SEMI_BOLD}>TRACK YOUR RIDER</ThemedText>
    <ThemedView style={styling.textWrapper}>
      <ThemedText style={styling.descripText} size={15}>
        You can now track your gas vendor {'\n'}
        and know the status of your order in {'\n'}
        real-time.
      </ThemedText>
    </ThemedView>
  </ThemedView>
)

export default PageTwo
