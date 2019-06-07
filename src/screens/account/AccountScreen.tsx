import React from 'react'
import { Component } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import { FontStyle, Color } from '../../constants'
import Style from '../../constants/Style'
import Routes from '../../navigation/Routes'
import HeaderTitle from '../../components/HeaderTitle'
import NavigationIcon from '../../components/NavigationIcon'

import styling from './style'

interface Props {
  navigation?: any
}

export default class AccountScreen extends Component<Props, any> {

  static navigationOptions =  ({ navigation }: any) => ({
    headerBackTitle: null,
    headerTitle: <HeaderTitle title='Account' />,
    headerTintColor: Color.WHITE,
    headerStyle: Style.toolbarStyleAccent,
    headerLeft: <NavigationIcon {...{ navigation }} />,
  })

  navigateToOrderHistory = () => {
    this.props.navigation.navigate(Routes.ORDER_HISTORY)
  }

  render () {
    return (
      <ThemedView>
        <EditProfileView fullname='Linus Mba' />

        <Item
          title='Order history'
          renderIcon={
          <Image
            style={styling.itemIcon}
            source={require('../../../assets/imgs/order-history.png')}
          />}
          onPress={this.navigateToOrderHistory}
        />
        
        <Item
          title='Add address'
          renderIcon={
          <Image
            style={styling.itemIcon}
            source={require('../../../assets/imgs/address.png')}
          />}
        />

        <Item
          title='Help/Support'
          renderIcon={
            <Image
              style={styling.itemIcon}
              source={require('../../../assets/imgs/support.png')}
            />}
        />

      </ThemedView>

    )
  }
}

const EditProfileView = ({ fullname }: any) => (
  <View style={styling.editProfileView}>
    <View style={styling.profileImageWrapper}>
      <Image
        style={styling.profileImage} 
        resizeMode='contain' 
        source={require('../../../assets/imgs/mario.png')}
      />
    </View>

    <View style={styling.nameView}>
      <ThemedText style={{ marginBottom: 2 }} size={19} weight={FontStyle.REGULAR}>
        {fullname}
      </ThemedText>
      <ThemedText style={{ color: Color.TEXT_GRAY }} size={15}>Edit profile</ThemedText>
    </View>

    <TouchableOpacity style={styling.editButton} activeOpacity={.8}>
      <Image
        resizeMode='contain'
        style={styling.editImage}
        source={require('../../../assets/imgs/edit.png')}
        />
    </TouchableOpacity>
  </View>
)

const Item = ({ title, renderIcon, onPress }: any) => (
  <TouchableOpacity style={styling.itemWrapper} onPress={onPress}>
    {renderIcon}
    <ThemedText size={16} weight={FontStyle.REGULAR}>
      {title}
    </ThemedText>
  </TouchableOpacity>
)
