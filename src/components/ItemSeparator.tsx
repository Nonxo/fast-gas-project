import React from 'react'
import { Color } from '../constants'
import { View, StyleSheet } from 'react-native'

const ItemSeparator = () => (
  <View style={styling.itemSeparator} />
)

const styling = StyleSheet.create({
  itemSeparator: {
    height: 1,
    alignSelf: 'stretch',
    borderColor: Color.MODAL_BAR_COLOR,
    backgroundColor: Color.MODAL_BAR_COLOR
  }
})

export default ItemSeparator
