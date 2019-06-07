import { StyleSheet } from 'react-native'
import { Color } from '../../constants'

export default StyleSheet.create({
  button: {
    marginTop: 5,
  },
  contentBox: {
    flex: 1,
    marginVertical: 15,
  },
  termsText: {
    color: Color.BLACK
  },
  textInput: {
    marginBottom: 10
  },
  wrapperView: {
    flex: 1,
    justifyContent: 'center'
  },
  titleText: {
    marginVertical: 8,
    lineHeight: 21,
    textAlign: 'center',
    color: Color.TEXT_LIGHT,
    textShadowColor: Color.TEXT_BORDER_COLOR
  },
})