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

                                    <Text style={styles.modalText}>{props.dishes[dishId].name}</Text>
                                    <Text style={styles.modalText}>x {props.orders[dishId]}</Text>
                                    <Text style={styles.modalDishes}>{props.dishes[dishId].price * props.orders[dishId]} KGS</Text>
                                    <Text style={styles.modalText} onPress={() => props.onRemove(dishId, props.dishes[dishId].price)}>
                                        Delete
                                    </Text>
                                </View>
                            )
                        }
                        return orders
                    })}

                    {props.orderTotal ?
                        <View style={styles.modalPrice}>
                            <Text style={styles.modalPrice}>Delivery: {props.delivery} KGS</Text>
                            <Text style={styles.modalPrice}>Total Price: {props.delivery + props.orderTotal} KGS</Text>
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
