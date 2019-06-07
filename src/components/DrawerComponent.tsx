import React, { Component } from 'react'
import ThemedText from '../components/ThemedText'
import { Color, FontStyle, Style } from '../constants'
import { DrawerItems, SafeAreaView } from 'react-navigation'
import { View, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

export default class DrawerComponent extends Component<any, any> {

  render () {
    return (
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <SafeAreaView style={styling.container} forceInset={{ top: 'always', horizontal: 'never' }}>
          <ProfileView name='Linus Mba' />
          <View style={{ flex: 1 }}>
            <DrawerItems {...this.props} />
          </View>
          <LogoutView />
        </SafeAreaView>
      </ScrollView>
    )
  }
}

const ProfileView = ({ name, photo }: any) => (
  <View style={styling.profileView}>
    <View style={styling.profileImageWrapper}>
      <Image
        style={styling.profileImage}
        resizeMode='contain'
        source={require('../../assets/imgs/mario.png')}
      />
    </View>
   <ThemedText
    size={17} 
    weight={FontStyle.REGULAR}
    style={styling.profileName}>
      {name}
    </ThemedText>
  </View>
)

const LogoutView = () => (
  <View style={styling.logoutContainer}>
    <TouchableOpacity activeOpacity={1} style={styling.logoutView}>
      <Image
        style={[Style.drawerIcon, { marginLeft: 50 }]}
        resizeMode='cover'
        source={require('../../assets/imgs/logout.png')}
      />
      <ThemedText size={17} style={styling.logOutText} weight={FontStyle.REGULAR}>Log out</ThemedText>
    </TouchableOpacity>
  </View>
)

const styling = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileImageWrapper: {
    width: 70,
    height: 70,
    overflow:'hidden',
    borderRadius: 35,
    marginLeft: -80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoutView: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  logoutContainer: {
    height: 95,
    borderTopWidth: 1,
    backgroundColor: Color.SECONDARY,
    borderColor: Color.DRAWER_BORDER_COLOR
  },
  logOutText: {
    marginLeft: 21,
    color: Color.WHITE
  },
  profileImage: {
    width: 70,
    height: 70,
  },
  profileName: {
    marginLeft: 20,
    color: Color.WHITE,
  },
  profileView: {
    height: 115,
    marginBottom: 20,
    flexDirection: 'row',
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Color.DRAWER_BORDER_COLOR,
  },
})
