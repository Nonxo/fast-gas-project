import { StyleSheet } from 'react-native'
import { Color } from '../../../constants'

export default StyleSheet.create({
  flatList: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 15,
  },
  icon: {
    width: 55,
    height: 55,
    margin: 15,
  },
  middleContent: {
    flex: 0.6,
    justifyContent: 'center',
  },
  weightText: {
    color: Color.BLACK,
    marginBottom: 5,
  },
  widgetIcon: {
    width: 11,
    height: 11,
    alignSelf: 'center',
    marginRight: 10,
  },
  rightIcon: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusIcon: {
    width: 20,
    height: 20,
  },
  completedText: {
    color: Color.TEXT_GRAY
  },
  historyItem: {
    height: 102,
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 11,
    flexDirection: 'row',
    borderColor: Color.ACCENT,
  },
  iconWrapper: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noHistoryItem: {
    minHeight: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
})