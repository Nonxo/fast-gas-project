import React from 'react'
import { Component } from 'react'
import Modal from '../../../components/Modal'
import Button from '../../../components/Button'
import { View, StyleSheet, Alert } from 'react-native'
import Routes from '../../../navigation/Routes'
import { Color, Style } from '../../../constants'
import CylinderList from './widgets/CylinderList'
import DropDown from '../../../components/DropDown'
import ThemedView from '../../../components/ThemedView'
import Cylinder from '../../../data/model/Cylinder'
import TopBarExtension from './widgets/TopBarExtenstion'
import cylinders from '../../../data/cache/CylinderData'
import NumberPicker from '../../../components/NumberPicker'
import OrderSummary from '../../../data/model/Order';
import OrderRequest from "../../../api/request/OrderRequest";

interface Props {
  navigation?: any
  isLoading: boolean
  orderSuccessful: boolean
  placeOrder(request: OrderRequest): void
}

interface State {
  quantity: number
  showModal: boolean
  selectedCylinder: Cylinder
}

export default class GasRefillScreen extends Component<Props, State> {

  static navigationOptions = ({ navigation }: any) => {
    return {
      headerBackTitle: null,
      headerTintColor: Color.WHITE,
      header: <TopBarExtension onPress={() => navigation.dismiss()} />,
      headerStyle: Style.defaultHeaderStyle,
    }
  }

  state = {
    quantity: 1,
    showModal: false,
    customer: '',
    address: '',
    location: [],
    cylinderSize: 1,
    cylinderSwap: false,
    wallet: false,
    orderType: '',
    selectedCylinder: {} as Cylinder
  }

  proceedToOrderSummary = () => {
    const { quantity, selectedCylinder } = this.state

    if (selectedCylinder.price == undefined) {
        Alert.alert('Please select a cylinder to continue')
        return
    }

    let order = new OrderSummary(
      selectedCylinder.price, quantity, 
      (quantity * selectedCylinder.price), selectedCylinder.weight, 
      'Refill and return my cylinder')

    this.props.navigation.push(Routes.ORDER_SUMMARY, { order: order })
    this.setState({ selectedCylinder: {} as Cylinder })
  }

  handleQuantityChanged = (quantity: number) => {
    this.setState({ quantity: quantity })
  }

  toggleModal = () => {
    this.setState((prevState: any, prevProps: any) => ({
      showModal: !prevState.showModal
    }))
  }

  selectCylinder = (index: number) => {
    this.setState({
      selectedCylinder: cylinders[index]
    })
    this.toggleModal()
  }
  handleOrder = () => {
    const { quantity,}
  }

  render () {
    const { selectedCylinder } = this.state
    return (
      <ThemedView style={styling.wrapper}>

          <View style={styling.dropDownWrapper}>
            <DropDown
              onPress={this.toggleModal}
              label={`${selectedCylinder.id ? selectedCylinder.weight + 'kg cylinder' : 'Cylinder Size' }`}
            />
            <DropDown
              label='Cylinder Swap'
              style={{ marginTop: 15 }}
            />
          </View>

          <View style={styling.buttonWrapper}>
            <NumberPicker
              min={1} 
              max={10}
              onValueChanged={this.handleQuantityChanged}
              style={{ flex: 0.35, alignSelf: 'center' }}
            />
            <Button
              title='proceed'
              style={{ flex: 0.5 }}
              onPress={this.proceedToOrderSummary}
            />
          </View>

          <Modal
            title='Cylinder size'
            onClose={this.toggleModal}
            visible={this.state.showModal}>

            <CylinderList
              selectedCylinderId={selectedCylinder.id}
              cylinders={cylinders}
              onSelectItem={this.selectCylinder}
            />
          </Modal>

      </ThemedView>
    )
  }
}

const styling = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  dropDownWrapper: {
    top: 50,
    flex: 0.3,
    alignSelf: 'stretch',
    paddingLeft: 20,
    paddingRight: 23,
    alignItems: 'center',
    justifyContent: 'center'
  },
  barTitle: {
    flex: 0.5,
    marginTop: 10,
    paddingLeft: 10,
    color: Color.ACCENT,
  },
  buttonWrapper: {
    top: 100,
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})
