import React from 'react'
import styling from './style'
import { PureComponent } from 'react'
import Payment from '../../../../../constants/Payment'
import ThemedModal from '../../../../../components/Modal'
import { Color, FontStyle } from '../../../../../constants'
import ThemedText from '../../../../../components/ThemedText'
import ItemSeparator from '../../../../../components/ItemSeparator'
import { FlatList, Image, TouchableHighlight, View, GestureResponderEvent } from 'react-native'

interface Props {
  showModal: boolean
  closeModal?(): void
  selectedPayment?: Payment
  onPaymentSelected?(payment: Payment): void
}

/** Ideally should be loaded from a data store, fetched from the remote server */
const paymentOptions = [ 
  { id: '1', type: Payment.WALLET },
  { id: '2', type: Payment.CARD },
]

export default class PaymentModal extends PureComponent<Props, any> {

  private keyExtractor = (item: any, index: number) => item.id

  private renderItems = ({ item, index }: any) => {
    const { closeModal, selectedPayment, onPaymentSelected } = this.props
    return (
      <PaymentItem
        payment={item.type}
        selected={selectedPayment === item.type}
        onSelected={() => {
          onPaymentSelected && onPaymentSelected(item.type)
          closeModal && closeModal()
        }}
      />
    )
  }

  private renderSeparator = () => (
    <ItemSeparator />
  )

  render () {
    const { showModal, closeModal, selectedPayment } = this.props
    return (
      <ThemedModal
        visible={showModal}
        onClose={closeModal}
        title='Choose payment'
        style={{ height: 260 }}
      >
        <PaymentList
          selectedPayment={selectedPayment}
          renderItem={this.renderItems}
          keyExtractor={this.keyExtractor}
          itemSeparator={this.renderSeparator}
        />
      </ThemedModal>
    )
  }
}

const PaymentList = ({ renderItem, selectedPayment, itemSeparator, keyExtractor }: any) => (
  <FlatList
    extraData={selectedPayment}
    data={paymentOptions}
    renderItem={renderItem}
    keyExtractor={keyExtractor}
    ItemSeparatorComponent={itemSeparator}
  />
)

interface PaymentProps {
  selected: boolean
  payment: Payment
  onSelected?(event: GestureResponderEvent): void
}

const PaymentItem = (props: PaymentProps) => (
  <TouchableHighlight style={styling.row} underlayColor={Color.LIGHT_GRAY} onPress={props.onSelected}>
      <View style={styling.paymentItem}>
        <View style={styling.paymentText}>
          <ThemedText size={20} weight={FontStyle.SEMI_BOLD}>
            {props.payment}
          </ThemedText>
      </View>

      <Image
        style={styling.selectedIcon}
        source={props.selected 
            ? require('../../../../../../assets/imgs/verified.png' )
            : require('../../../../../../assets/imgs/oval.png')
        }
      />
    </View>
  </TouchableHighlight>
)
