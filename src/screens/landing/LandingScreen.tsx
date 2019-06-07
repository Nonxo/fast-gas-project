import React, { PureComponent } from 'react'
import { Color } from '../../constants'
import Logo from '../../components/Logo'
import LoginView from '../login/LoginView'
import TabSwitch from '../../components/TabSwitch'
import RegisterView from '../register/RegisterView'
import ThemedView from '../../components/ThemedView'
import { StyleSheet, ScrollView } from 'react-native'
import HeaderTitle from '../../components/HeaderTitle'

interface Props {

}

interface State {
  activeTab: string
}

const TabTitles = [
  'Login', 'Sign up'
]

export default class LandingScreen extends PureComponent<Props, State> {

  static navigationOptions = {
    headerBackTitle: <HeaderTitle title='Enter code' tintColor={Color.BLACK} />
  }

  tabSwitch = React.createRef<TabSwitch>()

  state = {
    activeTab: 'Login',
    activeIndex: 0
  }

  handleTabChanged = (index: number) => {
    this.setState({ activeTab: TabTitles[index] })
  }

  handleSignUpLinkPressed = () => {
    if (this.tabSwitch.current) {
      this.tabSwitch.current.switchToIndex(1)
      this.setState({ activeTab: TabTitles[1] })
    }
  }

  render () {
    const { activeTab, activeIndex } = this.state
    return (
      <ThemedView>
        <Logo style={styling.logo} />
        <TabSwitch
          ref={this.tabSwitch}
          titles={TabTitles}
          activeIndex={activeIndex}
          onTabChanged={this.handleTabChanged}
        />
        <ContentArea>
          {(activeTab == 'Login')
           ? <LoginView
               onLinkPress={this.handleSignUpLinkPressed}
               navigation={this.props}
              />
            : <RegisterView
                navigation={this.props}
              />
          }
        </ContentArea>
      </ThemedView>
    )
  }
}

const ContentArea = ({ children }: any) => (
  <ScrollView style={styling.content}>
    {children}
  </ScrollView>
)

const styling = StyleSheet.create({
  logo: {
    width: 140,
    marginTop: 10,
    alignSelf: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 35,
  },
})