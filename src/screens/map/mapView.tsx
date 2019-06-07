import React, {Component} from 'react';
import {MapView} from 'expo';
import {Dimensions, Image, StyleSheet, View} from "react-native";
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import HeaderTitle from "../../components/HeaderTitle";
import {Color} from "../../constants";
import Style from "../../constants/Style";
import NavigationIcon from "../../components/NavigationIcon";
import FontStyle from "../../constants/FontStyle";
import Button from "../../components/Button";
import { getDimensions } from "../../utilities/DimensionUtil";

interface Props {
    navigation: any
}
export default class MapsView extends Component<Props, {}> {

    static navigationOptions = ({ navigation }: any) => ({
        headerBackTitle: null,
        headerTitle: <HeaderTitle title='Track Orders' />,
        headerTintColor: Color.WHITE,
        headerStyle: Style.toolbarStyleAccent,
    })
    moveToHomeScreen = () => {
        this.props.navigation.push('Home');
    }
    render () {
        return (
            <ThemedView>
            <MapView
                style={{flex: 0.6}}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}

            />
            <View style={style.wrapperView}>
                <View style={style.circleWrapper}>
                    <ThemedText weight={FontStyle.REGULAR} size={25} style={{color: Color.ACCENT}}>15</ThemedText>
                    <ThemedText weight={FontStyle.LIGHT} style={{color: Color.WHITE}}>min</ThemedText>
                </View>
                <ThemedText weight={FontStyle.SEMI_BOLD} style={{marginTop: 65}}>Your order is on the way</ThemedText>
                <ThemedText weight={FontStyle.LIGHT} style={{marginTop: 5}}>James will be at your door step soon</ThemedText>
                <ThemedText>keep an eye on it</ThemedText>
                <Button
                    style={style.button}
                    title='rate order'
                    leftIcon={<RateIcon />}
                />
            </View>
            </ThemedView>
        )
    }
}

const RateIcon = () => (
    <Image
        resizeNode='contain'
        style={style.rateIcon}
        source={require('../../../assets/imgs/track-order.png')}/>
)

const style = StyleSheet.create({
    wrapperView: {
        flex: 0.4,
        paddingHorizontal: 50,
        alignItems: 'center',
    },
    circleWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        width: 70,
        left: (Dimensions.get('window').width/2) - (70/2) ,
        top: -30,
        position: 'absolute',
        borderRadius: 35,
        backgroundColor: Color.BLACK
    },
    rateIcon: {
        right: 20,
        width: 30,
        height: 30,
    },
    button: {
        width: 270,
        marginBottom: 20,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0
    }
})
