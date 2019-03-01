import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../../styles';

const Checkout = props => {
    return (
        <View style={styles.checkout}>
            <Text style={styles.checkoutText}>Order total: {props.orderTotal} KGS</Text>
            <TouchableOpacity style={styles.checkoutBtn} onPress={props.pressed}>
                <Text>Checkout</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Checkout;
