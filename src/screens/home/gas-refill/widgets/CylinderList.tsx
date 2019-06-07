import React from 'react'
import { Component } from 'react'
import Cylinder from '../../../../data/model/Cylinder'
import { FontStyle, Color } from '../../../../constants'
import ThemedText from '../../../../components/ThemedText'
import ItemSeparator from '../../../../components/ItemSeparator'
import { View, Image, FlatList, StyleSheet, TouchableHighlight, GestureResponderEvent } from 'react-native'
import Symbols from '../../../../constants/Symbols';

interface Props {
  selectedCylinderId?: string
  cylinders: Array<Cylinder>
  onSelectItem(selectedIndex: number): void
}

interface State {
  selectedId: string
}

export default class CylinderList extends Component<Props, State> {

  private keyExtractor = (item: Cylinder, index: number) => item.id
  
  state = {
    selectedId: ''
  }

  private renderCylinders = ({ item, index }: any) => {
    let cylinder = item as Cylinder
    return (
      <CylinderItem
        cylinder={cylinder}
        onSelected={() => {
          this.props.onSelectItem(index) 
          this.setState({ selectedId: cylinder.id })
        }}
        selected={cylinder.id == (this.props.selectedCylinderId || this.state.selectedId)}
      />
    )
  }

  private renderSeparator = () => (
    <ItemSeparator />
  )

  render () {
    return (
      <FlatList
        extraData={this.state}
        data={this.props.cylinders}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderCylinders}
        ItemSeparatorComponent={this.renderSeparator}
      />
    )
  }
}

interface CylinderProps {
  selected: boolean
  cylinder: Cylinder
  onSelected?(event: GestureResponderEvent): void
}

const CylinderItem = (props: CylinderProps) => (
  <TouchableHighlight style={styling.cylinderRow} underlayColor={Color.LIGHT_GRAY} onPress={props.onSelected}>
      <View style={styling.cylinderItem}>
        <Image
          resizeMode='contain'
          source={props.cylinder.icon}
          style={styling.cylinderIcon}
        />
        
        <View style={styling.cylinderText}>
          <ThemedText size={20} weight={FontStyle.SEMI_BOLD}>
            {`${props.cylinder.weight}kg`}
          </ThemedText>
          <ThemedText size={16} style={{ color: Color.TEXT_GRAY, marginTop: 5 }}>{
              `${Symbols.NAIRA}${props.cylinder.price}`}
          </ThemedText>
      </View>

      <Image
        style={styling.selectedIcon}
        source={props.selected 
            ? require('../../../../../assets/imgs/verified.png' )
            : require('../../../../../assets/imgs/oval.png')
        }
      />
    </View>
  </TouchableHighlight>
)

const styling = StyleSheet.create({
  cylinderIcon: {
    flex: 0.15,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  cylinderRow: { 
    height: 85,
  },
  cylinderItem: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  cylinderText: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  selectedIcon: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
})