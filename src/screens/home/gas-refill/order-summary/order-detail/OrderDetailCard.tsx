import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Color, FontStyle } from '../../../../../constants'
import ThemedText from '../../../../../components/ThemedText'
import OrderSummary from '../../../../../data/model/Order';
import Symbols from '../../../../../constants/Symbols';

interface Props {
  order: OrderSummary
}

const OrderDetailCard = (props: Props) => (
  <View style={styling.card}>
    <CardTitle title='Order summary' />
    <Content
      summary={props.order}
    />
  </View>
)

const CardTitle = ({ title }: any) => (
  <View style={styling.titleWrapper}>
    <ThemedText style={styling.titleText} size={16} weight={FontStyle.REGULAR}>{title}</ThemedText>
  </View>
)

interface ContentProps {
  summary: OrderSummary
}

const Content = (props: ContentProps) => (
  <View style={styling.content}>
    <Row style={{ paddingLeft: 15 }}>
      <View style={{ flex: 0.3 }}>
        <SubTitle title='Gas refill' />
        <ThemedText
          style={{ color: Color.BLACK, marginTop: 10 }} 
          weight={FontStyle.REGULAR}>
            {`${Symbols.NAIRA}${props.summary.price}`}
        </ThemedText>
      </View>
      <View style={{ flex: 0.4 }}>
        <SubTitle title='Quantity' />
        <ThemedText
          style={{ color: Color.BLACK, marginLeft: 25, marginTop: 10 }} 
          weight={FontStyle.REGULAR}>
            {props.summary.quantity}
        </ThemedText>
      </View>
      <View style={{ flex: 0.3 }}>
        <SubTitle title='Total' />
        <ThemedText
          style={{ color: Color.BLACK, marginTop: 10 }} 
          weight={FontStyle.REGULAR}>
            {`${Symbols.NAIRA}${props.summary.amountToPay}`}
        </ThemedText>
      </View>
    </Row>
    <Row style={{ paddingLeft: 15, flexDirection: 'column' }}>
      <SubTitle title='Cylinder size'/>
      <ThemedText
        style={{ color: Color.BLACK, marginTop: 10 }} 
        weight={FontStyle.REGULAR}>
          {`${props.summary.cylinderSize}${Symbols.KILO}`}
      </ThemedText>
    </Row>

    <Row style={{ paddingLeft: 15, flexDirection: 'column' }}>
      <SubTitle title='Cylinder swap' />
      <ThemedText
        style={{ color: Color.BLACK, marginTop: 10 }} 
        weight={FontStyle.REGULAR}>
          {props.summary.cylinderSwap}
      </ThemedText>
    </Row>
  </View>
)

const Row = ({ style, children }: any) => (
  <View style={[styling.contentRow, style ]}>{children}</View>
)

const SubTitle = ({ title, style}: any) => (
  <ThemedText
    size={16}
    weight={FontStyle.SEMI_BOLD}
    style={[{  color: Color.TEXT_GRAY }, style]}
  >
    {title}
  </ThemedText>
)


const styling = StyleSheet.create({
  card: {
    overflow: 'hidden',
    borderRadius: 6,
    minHeight: 355,
    borderWidth: 2,
    borderColor: Color.MODAL_BAR_COLOR,
  },
  titleWrapper: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.BLACK,
  },
  titleText: {
    color: Color.WHITE
  },
  content: {
    padding: 10,
  },
  contentRow: {
    marginVertical: 20,
    height: 60,
    flexDirection: 'row',
  }
})

export default OrderDetailCard
