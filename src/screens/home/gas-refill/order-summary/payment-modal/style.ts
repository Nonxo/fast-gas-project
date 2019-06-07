import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  row: {
    height: 85,
  },
  paymentText: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  paymentItem: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedIcon: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
})