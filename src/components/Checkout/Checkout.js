import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Checkout = () => {
    return (
        <View style={styles.checkout}>
            <Text style={styles.checkoutText}>Total price: 000 KGS</Text>
            <Button style={styles.btn} title="Checkout" onPress={() => console.log('Checkout')}/>
        </View>
    );
};

const styles = StyleSheet.create({
    checkout: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: 'yellow'
    },
    checkoutText:  {
        fontSize: 20,
    },
    btn: {

    }
});

export default Checkout;
