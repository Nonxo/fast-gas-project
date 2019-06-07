import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { Color } from '../../constants';

export default StyleSheet.create({
  wrapperView: {
    paddingBottom: 20,
  },
  backgroundView: {
    backgroundColor: Color.BLACK,
    height: Dimensions.get('window').height - (Dimensions.get('window').height * .80),
  },
  topUpSummaryCard: {
    borderRadius: 6,
    borderWidth: 2,
    paddingBottom: 12,
    marginBottom: 20,
    marginTop: 115,
    flex: 1,
    overflow: 'hidden',
    marginHorizontal: 20,
    borderColor: Color.MODAL_BAR_COLOR,
  },
  headerTitle: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: Color.BLACK
  },
  headerTitleText: {
    color: Color.WHITE,
    alignSelf: 'center',
    marginLeft: 25,
  },
})