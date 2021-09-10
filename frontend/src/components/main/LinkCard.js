import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../../styles/Colors'
import Fonts from '../../styles/Fonts'

const LinksCard = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.column}>
                <Text style={styles.date}>{props.creationDate}
                    <Text style={styles.date}> - {props.creationDate}</Text>
                </Text>
                <Text style={styles.text}>{props.shortLink}</Text>
            </View>
            
            <TouchableOpacity
                style={styles.button}
            >
                <Text style={{ color: 'white' }}>DELETE</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LinksCard

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,

        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,

        elevation: 3
    },

    date: {
        fontFamily: Fonts.bold,
        fontSize: 16,
        color: '#33485A'
    },
    text: {
        fontFamily: Fonts.bold,
        fontSize: 20,
        color: Colors.primary 
    },

    column: {
        justifyContent: 'space-between',
    },

    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5
    }
})