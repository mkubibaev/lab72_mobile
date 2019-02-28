import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Checkout = props => {
    return (
        <View style={styles.checkout}>
            <Text style={styles.checkoutText}>Order total: {props.orderTotal} KGS</Text>
            <TouchableOpacity style={styles.btn} onPress={props.pressed}>
                <Text>Checkout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    checkout: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: '#a0000f',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    checkoutText:  {
        fontSize: 24,
        color: '#fff'
    },
    btn: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#eee',
        borderWidth: 1,
        borderColor: '#781E27',
    }
});

export default Checkout;
