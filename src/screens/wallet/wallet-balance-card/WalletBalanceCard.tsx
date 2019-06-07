import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import Button from '../../../components/Button'
import ThemedText from '../../../components/ThemedText'
import { FontStyle, Color } from '../../../constants'
import Symbols from '../../../constants/Symbols'
import { formatCurrency } from '../../../utilities/CurrencyUtil'

const WalletBalanceCard = ({ balance }: any) => (
  <View style={styling.currentBalanceCard}>
    <ThemedText size={15} style={styling.titleText}>Current</ThemedText>
    <ThemedText size={30} weight={FontStyle.SEMI_BOLD} style={styling.balanceText}>
      {formatCurrency(100000000)}
    </ThemedText>
    <Button style={styling.topUpButton} title='Top up'/>
  </View>
)

const styling = StyleSheet.create({
  titleText: {
    marginTop: (Dimensions.get('window').height > 800) ? 40 : 20,
    color: Color.TEXT_GRAY
  },
  currentBalanceCard: {
    top: 30,
    padding: (Dimensions.get('window').height > 800) ? 20 : 18,
    height: (Dimensions.get('window').height > 800) ? 224 : 190,
    elevation: 4,
    shadowOffset: { 
      width: 0,
      height: 5
    },
    shadowRadius: 8,
    shadowOpacity: .2,
    borderRadius: 10,
    position: 'absolute',
    marginHorizontal: 20,
    alignSelf: 'stretch',
    backgroundColor: Color.WHITE,
    width: Dimensions.get('window').width - (Dimensions.get('window').width * .10),
  },
  balanceText: {
    
  },
  topUpButton: {
    marginTop: (Dimensions.get('window').height > 800) ? 30 : 25
  },
})

export default WalletBalanceCard