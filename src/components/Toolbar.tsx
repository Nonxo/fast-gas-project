import React from 'react'
import { Color } from '../constants'
import { 
  View, 
  Image, 
  Dimensions, 
  StyleSheet, 
  GestureResponderEvent, 
  TouchableOpacity, Platform } from 'react-native'

interface Props {
  icon?: any
  title?: any
  onPress?(event: GestureResponderEvent): void
}

const Toolbar = (props: Props) => (
  <View style={styling.toolbar}>
    <Icon onPress={props.onPress} />
  </View>
)

const Icon = ({ onPress }: any) => (
  <TouchableOpacity style={styling.iconWrapper} onPress={onPress}>
    <Image
      style={styling.icon}
      resizeMode='contain'
      source={Platform.OS == 'android' 
        ? require('../../assets/imgs/go-back-left-arrow.png') 
        : require('../../assets/imgs/back.png')}
    />
  </TouchableOpacity>
)

const styling = StyleSheet.create({
  icon: {
    alignSelf: 'center',
    width: Platform.OS === 'ios' ? 22 : 18,
    height: Platform.OS === 'ios' ? 22 : 18,
  },
  iconWrapper: {
    width: 45,
    height: 45,
    marginLeft: 5,
    borderRadius: 22,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolbar: {
    top: Platform.OS === 'ios' ? 13 : 15,
    height: 75,
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'stretch',
    backgroundColor: Color.TRANSPARENT,
    width: Dimensions.get('window').width,
  },
})

export default Toolbar
