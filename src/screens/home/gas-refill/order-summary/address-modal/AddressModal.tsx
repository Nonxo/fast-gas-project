import React from 'react'
import styling from './style'
import { PureComponent } from 'react'
import ThemedModal from '../../../../../components/Modal'
import { Color, FontStyle } from '../../../../../constants'
import ThemedText from '../../../../../components/ThemedText'
import ItemSeparator from '../../../../../components/ItemSeparator'
import { FlatList, Image, TouchableHighlight, View, GestureResponderEvent } from 'react-native'

interface Props {
  selectedAddress: string
  closeModal?(): void
  showModal: boolean
  onAddressSelected?(address: string): void
}

const storedAddresses = [
  { id: '1', detail: 'No 13 C & T drive, Lekki Nigeria'},
  { id: '2', detail: '12 Kilimanjaro Close, Lekki Nigeria'},
  { id: '3', detail: '19 Rock drive, Anakle close Germany'},
]

export default class AddressModal extends PureComponent<Props, any> {
  
  private keyExtractor = (item: any, index: number) => item.id

  private renderSeparator = () => (
    <ItemSeparator />
  )

  private renderItem = ({ item, index }: any) => {
    const { closeModal, selectedAddress, onAddressSelected } = this.props
    return (
      <AddressItem
        address={item.detail}
        selected={selectedAddress === item.detail}
        onSelected={() => {
          onAddressSelected && onAddressSelected(item.detail)
          closeModal && closeModal()
        }}
      />
    )
  }

  render () {
    const { showModal, closeModal, selectedAddress } = this.props
    return (
      <ThemedModal
        visible={showModal}
        onClose={closeModal}
        title='Confirm address'
        style={{ height: 0, minHeight: 340 }}
        >

        <AddressList
          selectedAddress={selectedAddress}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          itemSeparator={this.renderSeparator}
        />
      </ThemedModal>
    )
  }
}

const AddressList = ({renderItem, selectedAddress, itemSeparator, keyExtractor }: any) => (
  <FlatList
    extraData={selectedAddress}
    data={storedAddresses}
    renderItem={renderItem}
    keyExtractor={keyExtractor}
    ItemSeparatorComponent={itemSeparator}
  />
)

interface AddressItemProps {
  selected: boolean
  address: string
  onSelected?(event: GestureResponderEvent): void
}

const AddressItem = (props: AddressItemProps) => (
  <TouchableHighlight style={styling.row} underlayColor={Color.LIGHT_GRAY} onPress={props.onSelected}>
      <View style={styling.paymentItem}>
        <Image
          style={styling.selectedIcon}
          source={props.selected 
              ? require('../../../../../../assets/imgs/verified.png' )
              : require('../../../../../../assets/imgs/oval.png')
          }
        />
        <View style={styling.paymentText}>
          <ThemedText size={20} weight={FontStyle.SEMI_BOLD}>
            {props.address}
          </ThemedText>
        </View>
    </View>
  </TouchableHighlight>
)
