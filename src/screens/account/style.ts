import { StyleSheet } from 'react-native'
import { Color } from '../../constants'

export default StyleSheet.create({
  editProfileView: {
    height: 150,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    borderColor: Color.DIVIDER_COLOR,
  },
  profileImage: {
    width: 80,
    height: 80
  },
  profileImageWrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
  },
  nameView: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center'
  },
  editButton: {
    width: 70,
    height: 70,
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center'
  },
  editImage: {
    width: 36,
    height: 36,
  },
  itemWrapper: {
    height: 70,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    borderColor: Color.DIVIDER_COLOR,
  },
  itemIcon: {
    width: 30,
    height: 30,
    marginHorizontal: 40,
  }

})