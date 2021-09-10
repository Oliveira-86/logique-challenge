import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';
import Input from '../../components/UI/Input';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

const ShortingLinkScreen = () => {
    const [url, setUrl] = useState("");


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={styles.title}>url
                    <Text style={{ color: Colors.primary}}>Shortener</Text>
                </Text>

                <Input
                    onChangeText={(text) => setUrl(text)}
                    value={url}
                    placeholder="Enter URL"
                />

                <TouchableOpacity
                    onPress={() => { }}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Shorten</Text>
                </TouchableOpacity>

                <Text style={{ fontSize: 18 }}>http://github.com/oliveira</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default ShortingLinkScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },

    title: {
        fontFamily: Fonts.bold,
        fontSize: 40
    },

    button: {
        height: 50,
        width: "100%",
        marginVertical: 10,
        backgroundColor: "#1076F7",
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        fontFamily: Fonts.bold,
        color: 'white',
        fontSize: 20
    }
});
