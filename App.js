import React from 'react'
import { AppLoading, Font } from 'expo'
import AppFont from './src/constants/AppFont'
import { StyleSheet } from 'react-native'
import Navigation from './src/navigation/Navigation'

export default class App extends React.Component {

  state = {
    isLoadingComplete: false
  }

  loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        [AppFont.MONTSERRAT_BOLD]: require('./assets/fonts/Montserrat-Black.otf'),
        [AppFont.MONTSERRAT_LIGHT]: require('./assets/fonts/Montserrat-Light.otf'),
        [AppFont.MONTSERRAT_SEMI_BOLD]: require('./assets/fonts/Montserrat-SemiBold.otf'),
        [AppFont.MONTSERRAT_REGULAR]: require('./assets/fonts/Montserrat-Regular.otf'),
        [AppFont.MONTSERRAT_THIN]: require('./assets/fonts/Montserrat-Thin.otf')
      })
    ])
  }

  onError = (error) => {
    console.log(error)
  }

  onFinishedLoading = () => {
    this.setState({ isLoadingComplete: true })
  }

  render() {

    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.onError}
          onFinish={this.onFinishedLoading}
        />
      )
    } else {
      return (
        <Navigation />
      )
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
