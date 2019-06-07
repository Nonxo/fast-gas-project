import React from 'react'
import { Component } from 'react'
import Swiper from 'react-native-swiper'
import PageOne from './page-one/PageOne'
import PageTwo from './page-two/PageTwo'
import ThemedText from '../../components/ThemedText'
import { StyleSheet, TouchableOpacity } from 'react-native'

import { Color, FontStyle } from '../../constants'
import Routes from '../../navigation/Routes';

interface State {
  currentPageIndex: number
}

interface Props {
  navigation: any
}

export default class OnBoarding extends Component<Props, State> {

  swipper = React.createRef<any>()

  pages = [
    <PageOne key={0} />,
    <PageTwo key={1} />
  ]

  state = {
    currentPageIndex: 0,
  }

  onNextPressed = () => {
    const pageSize = this.pages.length 
    const nextIndex = this.state.currentPageIndex + 1

    if (nextIndex < pageSize) {
      this.swipper.current.scrollBy(nextIndex, true)
      this.setState({ currentPageIndex: nextIndex })
    }

    if (nextIndex == pageSize) {
      /* TODO display the registration screen */
      this.moveToRegisterScreen()
    }

  }

  onSkipPressed = () => {
    /* TODO Just display the registration screen, since the user skipped the onboarding */
    this.moveToRegisterScreen()
  }

  moveToRegisterScreen() {
    this.props.navigation.navigate(Routes.LANDING)
  }


  onIndexChanged = (index: number) => {
    this.setState({ currentPageIndex: index })
    console.log(`Index changed called: ${index}`)
  }

  render () {
    return (
      <Swiper
        index={0}
        showsButtons
        ref={this.swipper}
        dotColor={Color.PAGE_DOT_COLOR}
        onIndexChanged={this.onIndexChanged}
        buttonWrapperStyle={styling.btnWrapper}
        activeDotColor={Color.ACTIVE_PAGE_DOT_COLOR} 
        prevButton={<SwiperButton title='SKIP' onPress={this.onSkipPressed} />}
        nextButton={<SwiperButton title='NEXT' onPress={this.onNextPressed} />}
      >
       {this.pages.map(page => page)}
      </Swiper>
    )
  }

}

const SwiperButton = ({ title, onPress }: any) => (
  <TouchableOpacity onPress={onPress}>
    <ThemedText weight={FontStyle.SEMI_BOLD}>{title}</ThemedText>
  </TouchableOpacity>
)


const styling = StyleSheet.create({
  btnWrapper: {
    alignItems: 'flex-end',
    paddingBottom: 23,
    paddingLeft: 30,
    paddingRight: 30
  }
})