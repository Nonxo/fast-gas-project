import React from 'react'
import { Component } from 'react'
import { Image, View } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Card from '../../components/Card'
import Button from '../../components/Button'
import { FontStyle, Color } from '../../constants'
import styling from './style'
import Style from '../../constants/Style'
import Routes from '../../navigation/Routes'
import NavigationIcon from '../../components/NavigationIcon'

interface Props {
  navigation?: any
}

export default class HomeScreen extends Component<Props, {}> {

  static navigationOptions =  ({ navigation }: any) => ({
    headerBackTitle: null,
    activeTintColor: Color.WHITE,
    headerStyle: Style.toolbarStyle,
    headerLeft: <NavigationIcon {...{ navigation }} />,
  })

  moveToNextScreen = (view: string) => {
    this.props.navigation.push(view)
  }

  render () {
    return (
      <ThemedView style={styling.wrapper}>

        <View style={styling.menuBox}>
          <View style={styling.textWrapper}>
            <ThemedText size={25} weight={FontStyle.SEMI_BOLD}>Home</ThemedText>
            <ThemedText style={{ marginTop: 2 }}>Order Menu</ThemedText>
          </View>

          <View style={styling.menuItemWrapper}>
            <Card
              title='Gas refill' 
              style={styling.menuCard}
              onPress={() => this.moveToNextScreen(Routes.GAS_REFILL_STACK)}
              icon={
                <Image
                  source={require('../../../assets/imgs/gas-refill.png')}
                  resizeMode='contain'
                  style={styling.cardIcon}
                />
              }
            />
            <Card
              title='Bulk order'
              style={styling.menuCard}
              onPress={() => this.moveToNextScreen(Routes.BULK_ORDER)}
              icon={
                <Image
                  source={require('../../../assets/imgs/bulk-order.png')}
                  resizeMode='contain'
                  style={[styling.cardIcon, { flex: 0.3 }]}
                />
              }
            />
          </View>

          <View style={[styling.menuItemWrapper]}>
            <Card
              title='Buy cylinder'
              style={styling.menuCard}
              onPress={() => this.moveToNextScreen('BuyCylinder')}
              icon={
                <Image
                  source={require('../../../assets/imgs/buy-cylinder.png')}
                  resizeMode='contain'
                  style={styling.cardIcon}
                />
              }
            />
            <Card
              title='Buy accessories'
              style={styling.menuCard}
              onPress={() => this.moveToNextScreen('BuyAccessories')}
              icon={
                <Image
                  source={require('../../../assets/imgs/buy-accessories.png')}
                  resizeMode='contain'
                  style={styling.cardIcon}
                />
              }
            />
          </View>
        </View>
      

        <Button
          style={styling.button}
          onPress={()=>this.moveToNextScreen('Map')}
          title='track order'
          leftIcon={<TrackIcon />}
          />

      </ThemedView>
    )
  }
}

const TrackIcon = () => (
  <Image
    resizeMode='contain'
    style={styling.trackIcon}
    source={require('../../../assets/imgs/track-order.png')}
  />
)

