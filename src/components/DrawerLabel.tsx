import React from 'react'
import { StyleSheet } from 'react-native'
import Color from '../constants/Color'
import ThemedText from './ThemedText'
import { FontStyle } from '../constants';

const DrawerLabel = ({ title }: any) => (
  <ThemedText weight={FontStyle.REGULAR} style={styling.label}>{title}</ThemedText>
)

const styling = StyleSheet.create({
  label: {
    color: Color.WHITE,
    marginLeft: 4,
    textAlign: 'center'
  }
})

export default DrawerLabel
