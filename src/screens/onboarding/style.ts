
import { StyleSheet } from 'react-native'
import { Dimen, Color } from '../../constants'

export default StyleSheet.create({
  container: {
    alignItems: 'center', 
    justifyContent: 'center'
  },
  logo: {
    flex: 1,
    width: Dimen.LOGO_WIDTH,
  },
  largeImage: {
    marginTop: -30,
    width: Dimen.OB_IMG_SIZE,
    height: Dimen.OB_IMG_SIZE,
  },
  titleText: {
    marginTop: 22
  },
  descripText: {
    paddingTop: 15,
    textAlign: 'center',
    color: Color.TEXT_LIGHT,
    lineHeight: 23,
  },
  textWrapper: {
    flex: 1,
    alignItems: 'center',
  }
})