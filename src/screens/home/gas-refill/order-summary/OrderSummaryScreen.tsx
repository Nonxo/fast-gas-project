import React from 'react'
import { Component } from 'react'
import Button from '../../../../components/Button'
import Payment from '../../../../constants/Payment'
import { Color, Style } from '../../../../constants'
import DropDown from '../../../../components/DropDown'
import PaymentModal from './payment-modal/PaymentModal'
import ThemedView from '../../../../components/ThemedView'
import { View, StyleSheet, Alert, ScrollView } from 'react-native'
import HeaderTitle from '../../../../components/HeaderTitle'
import AddressModal from './address-modal/AddressModal';
import OrderDetailCard from './order-detail/OrderDetailCard';
import OrderSummary from '../../../../data/model/Order';
import Routes from '../../../../navigation/Routes';

interface Props {
  navigation?: any
}

interface State {
  paymentType?: Payment
  address: string
  showPaymentModal: boolean
  showAddressModal: boolean,
  order: OrderSummary,
}

export default class OrderSummaryScreen extends Component<Props, State> {
  
  static navigationOptions = {
    headerBackTitle: null,
    headerTintColor: Color.WHITE,
    headerStyle: Style.toolbarStyleAccent,
    headerTitle: <HeaderTitle title='Proceed' />,
  }

  state = {
    address: '',
    order: new OrderSummary(2000, 2, 4000, 6, 'Refill and return my cylinder'),
    paymentType: undefined,
    showPaymentModal: false,
    showAddressModal: false,
  }

  togglePaymentModal = () => {
    this.setState((prevState) => {
      return { showPaymentModal: !prevState.showPaymentModal }
    })
  }

  toggleAddressModal = () => {
    this.setState((prevState) => {
      return { showAddressModal: !prevState.showAddressModal }
    })
  }

  handlePaymentSelected = (payment: Payment) => {
    this.setState({ paymentType: payment })
  }

  handleAddressSelected = (address: string) => {
    this.setState({ address: address })
  }

  cancelOrder = () => {
    this.props.navigation.pop()
  }

  submitOrder = () => {
    const { address, paymentType } = this.state

    if (paymentType == null || paymentType == undefined) {
      Alert.alert('Choose a payment option')
      return
    }
    
    if (address == '' || address == undefined) {
      Alert.alert('Please specify your delivery address')
      return
    }

    // Todo: Send the order to the backend
    this.props.navigation.navigate(Routes.CONFIRMATION)
  }
  
  
  render () {
    const { order, address, paymentType, showAddressModal, showPaymentModal } = this.state
    const orderSummary = this.props.navigation.getParam('order', order)
    return (
      <ThemedView>
       <ScrollView contentContainerStyle={styling.scrollWrapper}>
        <View>
          <OrderDetailCard  order={orderSummary} />
          <DropDown
            label={`${paymentType !== undefined ? paymentType : 'Choose payment'}`}
            style={{ marginTop: 15 }}
            onPress={this.togglePaymentModal}
          />
          <DropDown
            label={`${(address !== undefined && address !== '') ? address : 'Confirm address'}`}
            style={styling.confirmDropDown}
            onPress={this.toggleAddressModal}
          />

          <Button
            title='Submit Order'
            onPress={this.submitOrder}
          />
          <Button
            textColor={Color.ACCENT}
            title='Cancel Order'
            onPress={this.cancelOrder}
            style={styling.cancelButton}
          />
        </View>
       </ScrollView>
       <PaymentModal
         selectedPayment={paymentType}
         showModal={showPaymentModal}
         closeModal={this.togglePaymentModal}
         onPaymentSelected={this.handlePaymentSelected}
       />
       <AddressModal
          selectedAddress={address}
          showModal={showAddressModal}
          closeModal={this.toggleAddressModal}
          onAddressSelected={this.handleAddressSelected}
        />
      </ThemedView>
    )
  }
}

const styling = StyleSheet.create({
  scrollWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  confirmDropDown: {
    marginTop: 30,
    marginBottom: 40
  },
  orderButton: {
    marginTop: 20,
  },
  cancelButton: {
    borderWidth: 2,
    marginTop: 15,
    borderColor: Color.ACCENT,
    backgroundColor: Color.TRANSPARENT,
  }
})