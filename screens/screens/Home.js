import React from "react";
import { View, TouchableNativeFeedback, Text, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableNativeFeedback>
                <View style={styles.referDetails}>
                    <Text style={{ color: '#fff' }} onPress={() => {
                        navigation.navigate('Details')
                    }}>I am Home...Click me to goto details</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    referDetails: {
        backgroundColor: 'rgba(26, 153, 21, 0.7)',
        borderWidth: 1.7,
        borderColor: '#0b8006',
        borderRadius: 7,
        padding: 15,
    }

});