import React, {Component} from "react";
import {Color} from "../../../constants";
import ThemedText from '../../../components/ThemedText';
import ThemedView from '../../../components/ThemedView';
import {
    Dimensions,
    Image,
    Keyboard,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableWithoutFeedback,
    View
} from "react-native";
import DropDown from "../../../components/DropDown";
import ThemedTextInput from "../../../components/ThemedTextInput";
import Button from "../../../components/Button";
import FontStyle from "../../../constants/FontStyle";


const TopBarExtension = () => (
    <View style={tilt.topBar}>
        <ThemedText
            size={19}
            style={tilt.barTitle}
            weight={FontStyle.SEMI_BOLD}>
            Installation and Accessories
        </ThemedText>

        <Image
            style={tilt.barImage}
            resizeMode='cover'
            source={require('../../../../assets/imgs/buy-accessories.png')}
        />
    </View>
)


interface Props {
    navigation: any
}
export default class BuyAcessoriesScreen extends Component<Props, {}> {
    textInput = React.createRef<ThemedTextInput>()

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


    moveToHomeScreen = () => {
        this.props.navigation.navigate('Home')
    }

    render() {
        return (
    <ThemedView>
        <KeyboardAvoidingView behavior='padding' style={tilt.wrapperView}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={tilt.dropDownWrapper}>
                    <ThemedText style={{marginTop: 150, paddingRight: 23, textAlign: 'left', alignSelf: 'stretch'}} weight={FontStyle.LIGHT}>Service request form</ThemedText>
                    <ThemedText style={tilt.textWrapper} weight={FontStyle.REGULAR}>Services</ThemedText>
                    <DropDown label=''/>
                    <ThemedText style={tilt.textWrapper} weight={FontStyle.REGULAR}>Select Address</ThemedText>
                    <DropDown label=''/>
                    <ThemedText style={tilt.textWrapper} weight={FontStyle.REGULAR}>Message</ThemedText>
                <ThemedTextInput
                placeholder= ''
                keyboardType='default'
                style={tilt.textArea}
                ref={this.textInput}
                 />
                 <Button
                title='Send Message'
                style={tilt.button}
                onPress={this.moveToHomeScreen}
                 />
                </View>

            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    </ThemedView>

        )
    }

}

const tilt = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    textWrapper: {
        paddingRight: 23,
        textAlign: 'left',
        marginTop: 10,
        alignSelf: 'stretch',
    },
    barTitle: {
        flex: 0.5,
        marginTop: 35,
        paddingLeft: 20,
        color: Color.ACCENT,
    },
    barImage: {
        width: 50,
        flex: 0.5,
        top: 10,
        left:10,
        opacity: 0.4,
    },
    dropDownWrapper: {
        paddingTop: 20,
        alignSelf: 'stretch',
        paddingLeft: 20,
        paddingRight: 23,
        alignItems: 'center',
        justifyContent: 'center'
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
        width: 350,
        height: 45,
        marginBottom: 10,
        alignSelf: 'center',
        bottom: -30,
        backgroundColor: Color.ACCENT
    },

    textArea: {
        textAlignVertical: 'top',
        height: 150,
        borderColor: '#9E9E9E',
        borderRadius: 10,
        backgroundColor : Color.LIGHT_GRAY
    },

    wrapperView: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center'
    }


})
