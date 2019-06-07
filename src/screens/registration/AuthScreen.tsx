import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import EnterProfileScreen from './profile/EnterProfileScreen';
import HomeScreen from '../home/HomeScreen';



export default class AuthScreen extends Component {
    state = {
        index: 0,
        routes: [
            { key: '1', title: 'First'},
            { key: '2', title: 'Second'}
        ],
    }
    render () {
        return (
            <TabView 
               navigationState={this.state} 
               renderScene={SceneMap({
                   First: EnterProfileScreen,
                   Second: HomeScreen
               })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('screen').width, height: 0 }}
                />
        )
    }
}