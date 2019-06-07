import React from 'react'
import Toolbar from '../../../../components/Toolbar'
import { FontStyle, Color } from '../../../../constants'
import ThemedText from '../../../../components/ThemedText'
import { View, Image, Dimensions, StyleSheet, GestureResponderEvent } from 'react-native'

interface Props {
  onPress?(event: GestureResponderEvent): void
}

let TopBarExtension = (props: Props) => (
  <View style={styling.wrapper}>
    <View style={styling.topBar}>
      <ThemedText
        size={20} 
        style={styling.barTitle} 
        weight={FontStyle.SEMI_BOLD}>
          Gas refill
      </ThemedText>
      <Image
        style={styling.barImage}
        resizeMode='cover'
        source={require('../../../../../assets/imgs/bs-gas-refill.png')}
      />
    </View>
    <Toolbar onPress={props.onPress} />
  </View>
)

const styling = StyleSheet.create({
  barTitle: {
    flex: 0.5,
    marginTop: 10,
    paddingLeft: 10,
    color: Color.ACCENT,
  },
  barImage: {
    top: 110,
    flex: 0.43,
    height: 340,
    width: 340,
    opacity: 0.3,
  },
  topBar: {
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: Color.SECONDARY,
  },
  wrapper: {
    height: (Dimensions.get('window').height > 800) ? 230 : 190,
  }
})

export default TopBarExtension
