import { StyleSheet } from 'react-native'
import { Color } from '../../constants'

export default StyleSheet.create({
  view: {
    paddingVertical: 20,
    justifyContent: 'center',
    backgroundColor: Color.BLACK,
  },
  contentArea: {
    flex: 0.7,
    alignSelf: 'stretch',
  },
  boldText: {
    marginTop: 40,
    color: Color.WHITE,
    alignSelf: 'center'
  },
  lightText: {
    marginTop: 20,
    lineHeight: 25,
    textAlign: 'center',
    color: Color.TEXT_GRAY,
  },
  confirmIcon: {
    width: 52,
    bottom: 0,
    height: 52,
    alignSelf: 'center',
    position: 'absolute',
  },
})