import { StyleSheet} from "react-native"
import {Color, Dimen} from "../../../constants"

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    flex: 1,
    width: Dimen.LOGO_WIDTH,
    marginTop: -2
  },

  button: {
    width: 300,
    marginBottom: 20,
    alignSelf: 'center',
  },
  descripText: {
    paddingTop: 10,
    textAlign: 'left',
    color: Color.ACCENT,
    lineHeight: 50,
  },
  textWrapper: {
    flex: 1,
    alignItems: 'center'
  }
})
