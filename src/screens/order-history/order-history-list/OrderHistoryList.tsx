
import React from 'react'
import { View, Image, FlatList, } from 'react-native'
import { FontStyle, Color } from '../../../constants'
import ThemedText from '../../../components/ThemedText'
import OrderHistory from '../../../data/model/OrderHistory'
import { getFormattedTime, getFormattedDate } from '../../../utilities/DateUtil'
import { formatWeightWithSymbol, formatETAInmins } from '../../../utilities/Formatter'
import styling from './style'

interface OrderHistoryListProps {
  orderHistory: Array<OrderHistory>
  completed: boolean
  renderItem({item }: any): any
  keyExtractor(item: any, index: number): string
}

export const OrderHistoryList = ({ completed, orderHistory, keyExtractor, renderItem }: OrderHistoryListProps) => (
  <FlatList
    data={orderHistory}
    style={styling.flatList}
    extraData={completed}
    renderItem={renderItem}
    keyExtractor={keyExtractor}
    ListEmptyComponent={<NoOrderHistory />}
  />
)

interface OrderHistoryItemProps {
  showCompleted: boolean
  history: OrderHistory
}

export const OrderHistoryItem = (props: OrderHistoryItemProps) => (
  <View style={styling.historyItem}>
    <View style={styling.iconWrapper}>
      <Image
        resizeMode='contain'
        style={styling.icon}
        source={require('../../../../assets/imgs/19kg-cylinder.png')}
      />
    </View>
    <View style={styling.middleContent}>
      <ThemedText
        size={16}
        style={styling.weightText}
        weight={FontStyle.SEMI_BOLD}>
          {formatWeightWithSymbol(props.history && props.history.weight)}
      </ThemedText>
      
      {props.showCompleted
          ? <CompletedOrder
              dateCreated={props.history && props.history.dateCreated} 
              timeOfDelivery={props.history && props.history.timeDelivered}
            />
          : <OnGoingOrder
              eta={props.history && props.history.estimatedArrival}
              dateCreated={props.history && props.history.dateCreated}
            />
      }
    </View>
    {props.showCompleted
      ? <CompletedIcon />
      : <OnGoingIcon />
    }
  </View>
)

interface OnGoingOrderProps {
  eta: number
  dateCreated: number
}
const OnGoingOrder = ({ eta, dateCreated }: OnGoingOrderProps) => (
  <View>
    <ThemedText weight={FontStyle.REGULAR} style={{ color: Color.TEXT_GRAY, marginBottom: 3 }} size={14}>
      {formatETAInmins(eta)} remaining
    </ThemedText>
    <ThemedText weight={FontStyle.REGULAR} style={{ color: Color.TEXT_GRAY }} size={14}>
      {getFormattedTime(dateCreated)}
    </ThemedText>
  </View>
)

interface CompleteOrderProps {
  dateCreated: number
  timeOfDelivery: number
}
const CompletedOrder = ({ dateCreated, timeOfDelivery }: CompleteOrderProps) => (
  <View>
    <View style={{ flexDirection: 'row', marginBottom: 5 }}>
      <Image
        resizeMode='contain'
        style={styling.widgetIcon}
        source={require('../../../../assets/imgs/calender.png')}
      />
      <ThemedText
        size={14}
        weight={FontStyle.REGULAR}
        style={styling.completedText}>
        {getFormattedDate(dateCreated)}
      </ThemedText>
    </View>
    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
      <Image
        resizeMode='contain'
        style={styling.widgetIcon}
        source={require('../../../../assets/imgs/time.png')}
      />
      <ThemedText 
        size={14}
        weight={FontStyle.REGULAR}
        style={styling.completedText}>
        {getFormattedTime(timeOfDelivery)}
      </ThemedText>
    </View>
  </View>
)

const OnGoingIcon = () => (
  <View style={styling.rightIcon}>
    <Image
      resizeMode='contain'
      style={styling.statusIcon}
      source={require('../../../../assets/imgs/filled-circle.png')}
    />
</View>
)

const CompletedIcon = () => (
  <View style={styling.rightIcon}>
    <Image
      resizeMode='contain'
      style={styling.statusIcon}
      source={require('../../../../assets/imgs/verified.png')}
    />
</View>
)

const NoOrderHistory = () => (
  <View style={styling.noHistoryItem}>
    <ThemedText
      style={{ color: Color.TEXT_GRAY }}
      size={20} weight={FontStyle.REGULAR}>
        You have no history
    </ThemedText>
  </View>
)