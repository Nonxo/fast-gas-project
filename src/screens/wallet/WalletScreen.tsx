import React from 'react'
import styling from './style'
import { Component } from 'react'
import { View } from 'react-native'
import Style from '../../constants/Style'
import { FontStyle, Color } from '../../constants'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import HeaderTitle from '../../components/HeaderTitle'
import WalletHistory from '../../data/model/WalletHistory'
import NavigationIcon from '../../components/NavigationIcon'
import WalletHistoryItem from './wallet-history/WalletHistoryItem'
import WalletBalanceCard from './wallet-balance-card/WalletBalanceCard'
import WalletHistoryList from './wallet-history/WalletHistoryList';

interface State {
  walletBalance: number
  walletHistory: Array<WalletHistory>
}

export default class WalletScreen extends Component<any, State> {

  static navigationOptions =  ({ navigation }: any) => ({
    headerTitle: <HeaderTitle title='Wallet' />,
    headerTintColor: Color.WHITE,
    headerStyle: Style.toolbarStyleAccent,
    headerLeft: <NavigationIcon {...{ navigation }} />,
  })

  state = {
    walletBalance: 100000000,
    walletHistory: [
      new WalletHistory(12000, 1555358811000, 1555358811000),
      new WalletHistory(5000, 1555013211000, 1555013211000),
      new WalletHistory(1000, 1554149211000, 1554149211000),
    ]
  }

  private keyExtractor = (item: any, index: number) => index + ''

  private renderHistoryItem = ({ item }: any) => {
    return (
      <WalletHistoryItem
        history={item as WalletHistory}
      />
    )
  }

  render () {
    const { walletBalance, walletHistory } = this.state
    return (
      <ThemedView style={styling.wrapperView}>
          <BackgroundView />
          <WalletBalanceCard
            balance={walletBalance}
          />
          <TopUpSummary
            walletHistory={walletHistory}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderHistoryItem}
          />
      </ThemedView>
    )
  }
}

const BackgroundView = () => (
  <View style={styling.backgroundView} />
)

const TopUpSummary = ({ walletHistory, renderItem, keyExtractor }: any) => (
  <View style={styling.topUpSummaryCard}>
    <Header title='Latest Top Up' />
    <WalletHistoryList
      data={walletHistory}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  </View>
)

const Header = ({ title }: any) => (
  <View style={styling.headerTitle}>
    <ThemedText
      style={styling.headerTitleText}
      weight={FontStyle.REGULAR}>
        {title}
    </ThemedText>
  </View>
)
