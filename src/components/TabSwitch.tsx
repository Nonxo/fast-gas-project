import React, { PureComponent } from 'react'
import ThemedText from './ThemedText'
import { View, StyleSheet, TouchableOpacity, GestureResponderEvent } from 'react-native'
import { Color, FontStyle } from '../constants';


interface TabSwitchProps {
  style?:any
  titles: Array<String>
  activeIndex: number
  onTabChanged?(index: number): void
}

interface State {
  activeIndex: number
}

export default class TabSwitch extends PureComponent<TabSwitchProps, State> {

  state = {
    activeIndex: this.props.activeIndex || 0
  }

  handleTabChange = (index: number) => {
    this.setState({ activeIndex: index })

    const { onTabChanged } = this.props
    onTabChanged && onTabChanged(index)
  }

  switchToIndex = (index: number) => {
    this.setState({ activeIndex: index })
  }

  renderTabs = () => {
    const { activeIndex } = this.state
    const { titles } = this.props
    return titles.map((title, index) => 
      <TabItem
        key={index}
        title={title}
        active={activeIndex == index}
        onPress={() => this.handleTabChange(index)}
      />
    )
  }

  render () {
    const { titles } = this.props
    return (
      <View style={styling.tabSwitch}>
        {titles && this.renderTabs()}
      </View>
    )
  }
}

interface TabItemProps {
  title?: String
  active?: boolean
  onPress?(event: GestureResponderEvent): void
}

const TabItem = ({ title, active = false, onPress = () => {} }: TabItemProps) => (
  <TouchableOpacity style={styling.tabItem} onPress={onPress} activeOpacity={1}>
    <ThemedText
      size={16}
      weight={FontStyle.SEMI_BOLD}
      style={[styling.tabItemText, (!active) && styling.inactiveTab]}>
        {title}
    </ThemedText>
  {active && <Line /> }
  </TouchableOpacity>
)

const Line = () => (
  <View style={styling.line} />
)

const styling = StyleSheet.create({
  line: {
    height: 4,
    alignSelf: 'stretch',
    backgroundColor: Color.ACCENT,
    marginTop: 9,
  },
  tabSwitch: {
    height: 45,
    flexDirection: 'row',
    alignSelf: 'stretch',
    paddingHorizontal: 37,
  },
  tabItem: {
    flex: 0.3,
    marginRight: 10,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabItemText: {
    color: Color.ACCENT,
    alignItems: 'center',
  },
  inactiveTab: {
    opacity: 0.4
  }
})