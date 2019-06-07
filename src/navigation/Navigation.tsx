import React from 'react'
import { Image } from 'react-native'
import OnboardingScreen from '../screens/onboarding/OnBoardingScreen'
import PhoneNumberScreen from '../screens/registration/phonenumber/PhoneNumberScreen'
import EnterProfileScreen from '../screens/registration/profile/EnterProfileScreen'
import OTPConfirmationScreen from '../screens/registration/verification/OTPConfirmationScreen'
import HomeScreen from '../screens/home/HomeScreen'
import GasRefillScreen from '../screens/home/gas-refill/GasRefillScreen'
import BulkOrderScreen from '../screens/home/bulk-order/BulkOrderScreen'
import GetStartedScreen from '../screens/onboarding/get-started/GetStartedScreen'
import Routes from './Routes'
import { Color, Style } from '../constants'
import DrawerLabel from '../components/DrawerLabel'
import DrawerComponent from '../components/DrawerComponent'
import AccountScreen from '../screens/account/AccountScreen'
import PaymentScreen from '../screens/payments/PaymentScreen'
import WalletScreen from '../screens/wallet/WalletScreen'
import AuthScreen from '../screens/registration/AuthScreen'
import LandingScreen from '../screens/landing/LandingScreen'
import PromotionScreen from '../screens/promotions/PromotionScreen'
import ConfirmationScreen from '../screens/confirmation/ConfirmationScreen'
import BuyCylinderScreen from '../screens/home/buy-cylinder/BuyCylinderScreen'
import { OrderHistoryScreen } from '../screens/order-history/OrderHistoryScreen'
import BuyAcessoriesScreen from '../screens/home/buy-accessories/BuyAcessoriesScreen'
import OrderSummaryScreen from '../screens/home/gas-refill/order-summary/OrderSummaryScreen'
import { createStackNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator } from 'react-navigation'
import MapsView from "../screens/map/mapView";


const GasRefillStack = createStackNavigator({
  [Routes.GAS_REFILL]: GasRefillScreen,
  [Routes.ORDER_SUMMARY]: OrderSummaryScreen
},
{
  initialRouteName: Routes.GAS_REFILL
})

GasRefillStack.navigationOptions = {
  header: null
}

const HomeStack = createStackNavigator({
  [Routes.HOME]: HomeScreen,
  [Routes.MAP]: MapsView,
  [Routes.GAS_REFILL_STACK]: GasRefillStack,
  [Routes.BULK_ORDER]: BulkOrderScreen,
  [Routes.BUY_CYLINDER]: BuyCylinderScreen,
  [Routes.BUY_ACCESSORIES]: BuyAcessoriesScreen
}, 
{
  initialRouteName: Routes.HOME,
})

HomeStack.navigationOptions = {
  drawerLabel: <DrawerLabel title='Home' />,
  drawerIcon: () => (
    <Image
      resizeMode='contain'
      style={Style.drawerIcon}
      source={require('../../assets/imgs/home.png')}
      />
  )
}

const AccountStack = createStackNavigator({
  [Routes.ACCOUNT]: AccountScreen,
  [Routes.ORDER_HISTORY]: OrderHistoryScreen
})

AccountStack.navigationOptions = {
  drawerLabel: <DrawerLabel title='Account' />,
  drawerIcon: () => (
    <Image
      resizeMode='contain'
      style={Style.drawerIcon}
      source={require('../../assets/imgs/account.png')}
      />
  )
}

const PaymentStack = createStackNavigator({
  [Routes.PAYMENTS]: PaymentScreen
})

PaymentStack.navigationOptions = {
  drawerLabel: <DrawerLabel title='Payments' />,
  drawerIcon: () => (
    <Image
      resizeMode='contain'
      style={Style.drawerIcon}
      source={require('../../assets/imgs/payment.png')}
      />
  )
}

const WalletStack = createStackNavigator({
  [Routes.WALLET]: WalletScreen
})

WalletStack.navigationOptions = {
  drawerLabel: <DrawerLabel title='Wallet' />,
  drawerIcon: () => (
    <Image
      resizeMode='contain'
      style={Style.drawerIcon}
      source={require('../../assets/imgs/wallet.png')}
      />
  )
}

const PromotionStack = createStackNavigator({
  [Routes.PROMOTIONS]: PromotionScreen
})

PromotionStack.navigationOptions = {
  drawerLabel: <DrawerLabel title='Promotions' />,
  drawerIcon: () => (
    <Image
      resizeMode='contain'
      style={Style.drawerIcon}
      source={require('../../assets/imgs/promotions.png')}
      />
  )
}

const MainStack = createDrawerNavigator({
  [Routes.HOME]: HomeStack,
  [Routes.ACCOUNT]: AccountStack,
  [Routes.PAYMENTS]: PaymentStack,
  [Routes.WALLET]: WalletStack,
  [Routes.PROMOTIONS]: PromotionStack
},
{
  contentOptions: {
    activeTintColor: Color.WHITE,
    itemStyle: {
      height: 60,
    },
    iconContainerStyle: {
      marginLeft: 50
    }
  },
  contentComponent: DrawerComponent,
  drawerBackgroundColor: Color.SECONDARY
})

const RegistrationStack = createStackNavigator({
  [Routes.PHONE]: PhoneNumberScreen,
  [Routes.PROFILE]: EnterProfileScreen,
  [Routes.OTP]: OTPConfirmationScreen,
  [Routes.GET_STARTED]: GetStartedScreen,
}, 
{
  initialRouteName: Routes.GET_STARTED,
  defaultNavigationOptions: {
    headerStyle: {
      height: 0,
      width: 0
    }
   }
})

const LandingStack = createStackNavigator({
  [Routes.LANDING]: LandingScreen,
  [Routes.OTP]: OTPConfirmationScreen,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      height: 0,
      width: 0
    }
   }
})

const AppNavigation =  createSwitchNavigator({
  [Routes.ONBOARDING]: OnboardingScreen,
  [Routes.MAIN]: MainStack,
  [Routes.REGISTER]: RegistrationStack,
  [Routes.AUTH]: AuthScreen,
  [Routes.CONFIRMATION]: ConfirmationScreen,
  [Routes.LANDING]: LandingStack,
}, {
  initialRouteName: Routes.ONBOARDING
})

export default createAppContainer(AppNavigation)
