import {Image,Dimensions, StyleSheet, View} from "react-native";
import {Color} from "../../../constants";
import ThemedText from '../../../components/ThemedText';
import ThemedView from '../../../components/ThemedView'
import FontStyle from "../../../constants/FontStyle";
import {Component} from "react";
import React from "react";
import DropDown from "../../../components/DropDown";
import NumberPicker from "../../../components/NumberPicker";
import Button from '../../../components/Button';

const TopBarExtension = () => (
    <View style={custom.topBar}>
        <ThemedText
            size={19}
            style={custom.barTitle}
            weight={FontStyle.SEMI_BOLD}>
            Bulk delivery & supply
        </ThemedText>

        <Image
            style={custom.barImage}
            resizeMode='contain'
            source={require('../../../../assets/imgs/bulk-order.png')}
        />
    </View>
)

export default class BulkOrderScreen extends Component<{}, {}> {
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
                    <DropDown label='Quantity'/>
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
        flex: 0.4,
        marginTop: 10,
        paddingLeft: 20,
        color: Color.ACCENT,
    },
    barImage: {
      flex: 0.5,
      left: 40,
      height: 130,
      width: 700,
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
        flexDirection: 'row',
        overflow: 'hidden',
        alignSelf: 'stretch',
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'space-evenly',
        backgroundColor: Color.SECONDARY,
        height: (Dimensions.get('window').height > 800) ? 230 : 190,
        paddingTop: (Dimensions.get('window').height > 800) ? 30 : 20,
    },
    button: {
        width: 300,
        bottom: -30,
        marginBottom: 10,
        alignSelf: 'center',
        backgroundColor: Color.LIGHT_GRAY
    },
})
