import { StyleSheet } from 'react-native'
import { Color } from '../../constants'

export default StyleSheet.create({
  titleLabel: {
    marginTop: 20, 
    marginLeft: 20,
    marginBottom: 20,
    color: Color.TEXT_GRAY, 
  },
  clickableText: {
    marginLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  textLabel: {
    color: Color.BLACK,
  },
  paymentCardView: {
    height: 50,
    marginLeft: 20,
    flexDirection: 'row'
  },
  cardIcons: {
    width: 40,
    height: 40,
    marginRight: 10
  }
})