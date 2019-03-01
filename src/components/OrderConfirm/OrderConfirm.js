import React from 'react';
import {Modal, Text, TouchableOpacity, View} from "react-native";
import styles from "../../styles";

const OrderConfirm = props => {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.show}
            onRequestClose={props.onToggleModal}
        >
            <View style={styles.modal}>
                <View>
                    <Text style={styles.modalTitle}>Your order:</Text>

                    {Object.keys(props.orders).map(dishId => {
                        let orders = null;

                        if (props.orders[dishId] > 0) {
                            orders = (
                                <View key={dishId} style={styles.modalDish}>

                                    <Text>{props.dishes[dishId].name}</Text>
                                    <Text>x {props.orders[dishId]}</Text>
                                    <Text>{props.dishes[dishId].price * props.orders[dishId]} KGS</Text>
                                    <Text onPress={() => props.onRemove(dishId, props.dishes[dishId].price)}>
                                        Delete
                                    </Text>
                                </View>
                            )
                        }
                        return orders
                    })}

                    {props.orderTotal ?
                        <View style={styles.modalPrice}>
                            <Text>Delivery: {props.delivery} KGS</Text>
                            <Text>Total Price: {props.delivery + props.orderTotal} KGS</Text>
                        </View>
                        : <Text>Nothing selected</Text>
                    }

                </View>
                <View>
                    <TouchableOpacity onPress={props.onToggleModal}>
                        <Text style={styles.modalBtn}>Cancel</Text>
                    </TouchableOpacity>

                    {props.orderTotal ?
                        <TouchableOpacity onPress={props.onConfirm}>
                            <Text style={styles.modalBtn}>Order</Text>
                        </TouchableOpacity>
                        : null
                    }

                </View>
            </View>
        </Modal>
    );
};

export default OrderConfirm;
