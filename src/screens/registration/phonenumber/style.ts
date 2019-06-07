import { StyleSheet } from 'react-native'
import { Color } from '../../../constants'

export default StyleSheet.create({
  contentBox: {
    flex: 1,
    justifyContent: 'center',
  },
  wrapperView: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center'

  },
  phoneInput: {
    marginTop: 15,
    marginBottom: 15,
  },
  titleText: {
    lineHeight: 21,
    marginBottom: 30,
    textAlign: 'center',
    textShadowColor: Color.TEXT_BORDER_COLOR
  },
  button: {
    marginTop: 30,
  }
})