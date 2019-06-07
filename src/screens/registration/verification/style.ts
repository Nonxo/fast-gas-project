import { StyleSheet } from 'react-native'
import { Color } from '../../../constants'

export default StyleSheet.create({
  button: {
    marginTop: 50
  },
  phoneNumberText: {
    color: Color.BLACK
  },
  contentBox: {
    flex: 1,
    justifyContent: 'center'
  },
  wrapperView: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center'

  },
  textBody: {
    lineHeight: 25,
    textAlign: 'center',
    color: Color.TEXT_LIGHT,
  }
})