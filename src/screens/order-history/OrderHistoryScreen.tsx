import React from 'react'
import styling from './style'
import { Component } from 'react'
import Toggle from '../../components/Toggle'
import { Color, Style } from '../../constants'  
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import HeaderTitle from '../../components/HeaderTitle'
import { Image, TouchableOpacity } from 'react-native'
import OrderHistory from '../../data/model/OrderHistory'
import { OrderHistoryList, OrderHistoryItem } from '../order-history/order-history-list/OrderHistoryList'

enum Filter {
  ON_GOING = 'Ongoing',
  COMPLETED = 'Completed',
}

const labels = [
  Filter.ON_GOING,
  Filter.COMPLETED
]

const historyData: Array<OrderHistory> = [
  new OrderHistory(10, false, 10, 1547717363000, 0),
  new OrderHistory(12, true, 0, 1555464563000, 1555464563000),
  new OrderHistory(19, false, 5, 1554859763000, 1554859763000)
]

interface State {
  curFilter: Filter,
  orderHistory: Array<OrderHistory>
}

export class OrderHistoryScreen extends Component<any, State> {

  static navigationOptions =  ({ navigation }: any) => ({
    headerBackTitle: null,
    headerTitle: <HeaderTitle title='Order History' />,
    headerTintColor: Color.WHITE,
    headerStyle: Style.toolbarStyleAccent,
  })

  state = {
    curFilter: Filter.ON_GOING,
    orderHistory: []
  }

  private keyExtractor = (item: any, index: number) => index + ''

  private renderItems = ({ item }: any) => {
    let history = item as OrderHistory
    return (
      <OrderHistoryItem
        history={history}
        showCompleted={this.state.curFilter == Filter.COMPLETED}
      />
    )
  }

  filterHistoryData = (): Array<OrderHistory> => {
    const { curFilter, orderHistory  } = this.state
    return orderHistory.filter((history: OrderHistory) => history.completed == (curFilter == Filter.COMPLETED))
  }

  componentDidMount () {
    this.setState({ orderHistory: historyData })
  }

  handleFilterIndexChange = (index: number) => {
    this.setState({ curFilter: labels[index] })
  }

  render () {
    const { curFilter } = this.state

    return (
      <ThemedView>
          <Toggle
            labels={labels}
            style={{ marginTop: 25 }}
            onActiveIndexChanged={this.handleFilterIndexChange}
          />
          <OrderHistoryList
            orderHistory={this.filterHistoryData()}
            renderItem={this.renderItems}
            keyExtractor={this.keyExtractor}
            completed={curFilter == Filter.COMPLETED}
          />
          <ActionView />
      </ThemedView>
    )
  }
}

const ActionView = ({ show }: any) => (
  <TouchableOpacity style={styling.actionView}>
    <Image
      resizeMode='contain'
      style={styling.backArrow}
      source={require('../../../assets/imgs/back-gray.png')}
    />
    <ThemedText style={{ color: Color.TEXT_GRAY }}>Back to </ThemedText>
    <ThemedText style={{ color: Color.BLACK }}>Tracking order</ThemedText>
  </TouchableOpacity>
)
