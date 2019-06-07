import React from 'react'
import Symbols from '../../../constants/Symbols'
import { Color, FontStyle } from '../../../constants'
import ThemedText from '../../../components/ThemedText'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import WalletHistory from '../../../data/model/WalletHistory'
import { getFormattedDate, getFormattedTime } from '../../../utilities/DateUtil'
import { formatCurrency } from '../../../utilities/CurrencyUtil'

interface WalletHistoryProps {
  history?: WalletHistory
}

const WalletHistoryItem = (props: WalletHistoryProps) => (
  <View style={styling.historyItem}>
    <DataView history={props.history} />
    <ActionView />
  </View>
)

const ActionView = ({ onDeleted }: any) => (
  <TouchableOpacity style={styling.actionView}>
    <Image
      style={styling.deleteIcon}
      resizeMode='contain'
      source={require('../../../../assets/imgs/delete.png')}
    />
  </TouchableOpacity>
)

const DataView = (props: WalletHistoryProps) => (
  <View style={styling.dataView}>
    <AmountView
      amount={(props.history) ? props.history.amount : '25,500'}
    />
    <DateView
      time={(props.history) ? props.history.time : '13:00PM'}
      dateCreated={(props.history) ? props.history.dateCreated : 'Feb 19, 2019'}
    />
  </View>
)

const AmountView = ({ amount }: any) => (
  <View style={styling.amountView}>
    {/* Title */}
    <ThemedText
      size={14}
      style={styling.amountViewTitle}
      weight={FontStyle.SEMI_BOLD}>
        Amount
    </ThemedText>
    <ThemedText
      size={18}
      style={styling.topUpValueText}
      weight={FontStyle.SEMI_BOLD}>
        {formatCurrency(amount)}
    </ThemedText>
  </View>
)

const DateView = ({ dateCreated, time }: any) => (
  <View style={styling.dateView}>
    {/* Date Information */}
    <View style={styling.dataRow}>
      <Image
        resizeMode='contain'
        style={styling.widgetIcon}
        source={require('../../../../assets/imgs/calender.png')}
      />
      <ThemedText
        style={styling.dateViewText}
        size={12}
        weight={FontStyle.REGULAR}>
        {getFormattedDate(dateCreated)}
      </ThemedText>
    </View>

    {/* Time Information */}
    <View style={[styling.dataRow, { flex: 0.5 }]}>
      <Image
        resizeMode='contain'
        style={styling.widgetIcon}
        source={require('../../../../assets/imgs/time.png')}
      />
      <ThemedText
        style={styling.dateViewText}
        size={12}
        weight={FontStyle.REGULAR}>
        {getFormattedTime(time)}
      </ThemedText>
    </View>
  </View>
)

const styling = StyleSheet.create({
  dataView: {
    flex: 1,
  },
  amountView: {
    flex: 1
  },
  deleteIcon: {
    height: 20,
    width: 20,
  },
  widgetIcon: {
    width: 11,
    height: 11,
    marginRight: 10,
  },
  dataRow: {
    flex: 0.5,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountViewTitle: {
    marginLeft: 20,
    marginTop: 10, 
    marginBottom: 3,
    color: Color.TEXT_GRAY,
  },
  topUpValueText: {
    marginLeft: 20,
    color: Color.BLACK,
  },
  dateView: {
    height: 30,
    flexDirection: 'row',
    backgroundColor: Color.LIGHT_GRAY
  },
  dateViewText: {
    color: Color.TEXT_GRAY,
  },
  historyItem: {
    height: 98,
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 10,
    flexDirection: 'row',
    marginHorizontal: 15,
    alignSelf: 'stretch',
    borderColor: Color.MODAL_BAR_COLOR,
  },
  actionView: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: Color.ACCENT,
  },
})

export default WalletHistoryItem
