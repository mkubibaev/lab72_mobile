import React from 'react';
import {Modal, Text, TouchableOpacity, View} from "react-native";
import styles from "../../styles";

const OrderConfirm = props => {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.show}
            onRequestClose={() => {}}
        >
            <View style={{marginTop: 22}}>
                <View>
                    <Text style={styles.modalTitle}>Your order:</Text>

                    {Object.keys(props.orders).map(dishId => {
                        let orders = null;


                        if (props.orders[dishId] > 0) {
                            orders = (
                                <Text key={dishId}>{props.dishes[dishId].name} x {props.orders[dishId]}
                                    = {props.dishes[dishId].price * props.orders[dishId]} KGS
                                    <Text
                                        onPress={() => props.onRemove(props.dishes[dishId].id, props.dishes[dishId].price)}
                                    >Delete</Text>
                                </Text>
                            )
                        }
                        return orders
                    })}

                    <Text>Delivery: {props.delivery} KGS</Text>
                    <Text>Total Price: {props.delivery + props.orderTotal} KGS</Text>

                    <TouchableOpacity onPress={props.onToggleModal}>
                        <Text style={{color: 'red'}}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('Order')}>
                        <Text style={{color: 'red'}}>Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default OrderConfirm;
