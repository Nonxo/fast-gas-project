import React from "react";
import {Image,Dimensions, StyleSheet, View} from "react-native";
import {Color, FontStyle} from "../../../constants";
import ThemedText from '../../../components/ThemedText';
import ThemedView from '../../../components/ThemedView'
import {Component} from "react";
import DropDown from "../../../components/DropDown";
import NumberPicker from "../../../components/NumberPicker";
import Button from '../../../components/Button';


const TopBarExtension = () => (
  <View style={custom.topBar}>
    <ThemedText
      size={19}
      style={custom.barTitle}
      weight={FontStyle.SEMI_BOLD}>
        New gas cylinder
    </ThemedText>

    <Image
      style={custom.barImage}
      resizeMode='cover'
      source={require('../../../../assets/imgs/bs-gas-refill.png')}
    />
  </View>
)

export default class BuyCylinderScreen extends Component<{}, {}> {
    static navigationOptions = {
        headerStyle: {
            elevation: 0,
            borderBottomWidth: 0,
            borderColor: 'transparent',
        },
        headerTransparent: true,
        headerTintColor: Color.ACCENT,
        headerBackground: <TopBarExtension />
    }

    render() {
        return (
            <ThemedView style={custom.wrapper}>
                <View style={custom.dropDownWrapper}>
                    <DropDown label='Cylinder Size'/>
                </View>
                <View style={custom.buttonWrapper}>
                    <NumberPicker
                        min={1}
                        max={20}
                        style={{ flex: 0.35, alignSelf: 'center'}}
                    />
                    <Button
                        title='proceed'
                        style={{ flex: 0.5 }}
                    />
                </View>
                <View>
                    <Button
                        style={custom.button}
                        title='Additional Information'
                        textColor='gray'
                    />
                </View>
            </ThemedView>
        )
    }
}

const custom = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    dropDownWrapper: {
        flex: 0.5,
        paddingTop: 60,
        alignSelf: 'stretch',
        paddingLeft: 20,
        paddingRight: 23,
        alignItems: 'center',
        justifyContent: 'center'
    },
    barTitle: {
      flex: 0.6,
      marginTop: 10,
      paddingLeft: 20,
      color: Color.ACCENT,
    },
    barImage: {
        top: 100,
        flex: 0.4,
        height: 330,
        width: 330,
        opacity: 0.4,
    },
    buttonWrapper: {
        marginTop: -10,
        alignItems: 'center',
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    topBar: {
        height: (Dimensions.get('window').height > 800) ? 230 : 190,
        paddingTop: (Dimensions.get('window').height > 800) ? 30 : 20,
        flexDirection: 'row',
        overflow: 'hidden',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: Color.SECONDARY,
    },
    button: {
        width: 300,
        marginBottom: 10,
        alignSelf: 'center',
        bottom: -30,
        backgroundColor: Color.LIGHT_GRAY
    },
})
