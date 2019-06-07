import { StyleSheet } from 'react-native'
import { Color } from '../../constants'

export default StyleSheet.create({
  trackIcon: {
    right: 20,
    width: 30,
    height: 30,
  },
  textWrapper: {
    paddingLeft: 40,
    marginBottom: 20,
    textAlign: 'center',
    alignSelf: 'stretch',
  },
  menuCard: {
    width: 145,
    height: 165
  },
  menuItemWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  wrapper: {
    backgroundColor: Color.VIEW_BACKGROUND_COLOR
  },
  menuBox: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 270, 
    marginBottom: 20,
    alignSelf: 'center', 
  },
  cardIcon: {
    height: 50,
    flex: 0.45,
    marginBottom: 20
  }
})