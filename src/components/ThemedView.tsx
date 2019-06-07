import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

interface Props {
  style? : any;
  children?: any;
}

const Wrapper = (props: Props) => (
  <SafeAreaView style={[ styling.view, props.style ]}>
    { props.children }
  </SafeAreaView>
)

const styling = StyleSheet.create({
  view: {
    flex: 1,
  }
})

export default Wrapper
