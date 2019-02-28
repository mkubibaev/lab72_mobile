import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
    return (
        <View sytle={styles.header2}>
            <Text style={styles.header2Text}>Turtle Pizza</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header2: {
        paddingVertical: 20,
        backgroundColor: 'yellow'
    },
    header2Text: {
        fontSize: 20
    }
});

export default Header;
