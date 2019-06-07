import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import WalletHistory from '../../../data/model/WalletHistory'

interface WalletHistoryProps {
  data: Array<WalletHistory>
  renderItem({item}: any): any
  keyExtractor(item: any, index: number): string
}

const WalletHistoryList = (props: WalletHistoryProps) => (
  <FlatList
    style={styling.list}
    data={props.data}
    renderItem={props.renderItem}
    keyExtractor={props.keyExtractor}
  />
)

const styling = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 10,
  }
})

export default WalletHistoryList

