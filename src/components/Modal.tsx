import React from 'react'
import { Component } from 'react'
import { Color } from '../constants'
import ThemedText from './ThemedText'
import { View, Image, Modal, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'

interface Props {
  title: string
  style?: any
  children?: any
  onClose?(): void
  visible?: boolean
  animationType?: "none" | "slide" | "fade" | undefined
}

export default class ThemedModal extends Component<Props, any> {

  render () {
    const { style, visible, children, onClose, title, animationType } = this.props

    return (
      <Modal
        transparent
        visible={visible}
        animationType={animationType}
        onRequestClose={() => console.log()}>

        <View style={styling.overlay}>
          <Frame title={title} style={style} onClose={onClose}>
            {children}
          </Frame>
        </View>
      </Modal>
    )
  }
}

const Frame = ({ title, style, children, onClose }: any) => (
  <View style={[styling.modalFrame, style]}>
    <TopBar title={title} onClose={onClose}/>
    <Content>
      {children}
    </Content>
  </View>
)

const TopBar = ({ title, onClose }: any) => (
  <View style={styling.topBar}>
    <ThemedText
      size={16}
      style={styling.titleText}>
      {title}
    </ThemedText>
    <CloseIcon onClose={onClose} />
  </View>
)

const Content = ({ children }: any) => (
  <View style={{ flex: 1, alignSelf: 'stretch' }}>
    {children}
  </View>
)

const CloseIcon = ({ onClose }: any) => (
  <TouchableOpacity style={styling.touchableArea} onPress={onClose}>
    <Image
      resizeMode='contain'
      style={styling.closeIcon}
      source={require('../../assets/imgs/close.png')}
    />
  </TouchableOpacity>
)

const styling = StyleSheet.create({
  overlay: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(54, 54, 54, .8)',
  },
  closeIcon: {
    width: 20,
    height: 20,
  },
  titleText: {
    flex: 0.9,
    paddingLeft: 15,
    color: Color.BLACK,
  },
  topBar: {
    height: 65,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: Color.MODAL_BAR_COLOR,
  },
  modalFrame: {
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: Color.WHITE,
    width: Dimensions.get('screen').width - (Dimensions.get('screen').width * .20),
    height: Dimensions.get('screen').height - (Dimensions.get('screen').height * .20),
  },
  touchableArea: {
    flex: 0.2,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  }
})
