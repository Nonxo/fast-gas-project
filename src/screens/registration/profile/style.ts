import { StyleSheet } from 'react-native'
import { Color } from '../../../constants'

export default StyleSheet.create({
  button: {
    marginTop: 10,
  },
  contentBox: {
    flex: 1,
    justifyContent: 'center',
  },
  termsText: {
    color: Color.BLACK
  },
  textInput: {
    marginTop: 10,
    marginBottom: 10
  },
  wrapperView: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center'
  },
  titleText: {
    marginTop: 40,
    lineHeight: 21,
    textAlign: 'center',
    color: Color.TEXT_LIGHT,
    textShadowColor: Color.TEXT_BORDER_COLOR
  },
})