import React from 'react'
import { Platform } from 'react-native'
import ThemedText from '../components/ThemedText'
import { FontStyle, Color } from '../constants'

interface Props {
  title: string
  tintColor?: string
}

const margin = Platform.OS !== 'ios' ? { marginLeft: 10 } : {}

const HeaderTitle = (props: Props) => (
  <ThemedText
    style={[{ color: props.tintColor || Color.WHITE }, margin]}
    weight={FontStyle.REGULAR}>
    {props.title}
  </ThemedText>
)

export default HeaderTitle
