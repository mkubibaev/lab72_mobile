import React from 'react';
import {Modal, Text, TouchableOpacity, View, TextInput, Button} from "react-native";
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
                        <View style={styles.modalPrices}>
                            <Text style={styles.modalPrice}>Delivery: {props.delivery} KGS</Text>
                            <Text style={styles.modalPrice}>Total Price: {props.delivery + props.orderTotal} KGS</Text>

                            <View style={styles.form}>
                                <Text style={styles.formTitle}>Contact data:</Text>

                                <TextInput style={styles.input}
                                           placeholder="Your name"
                                           value={props.customer.name}
                                           onChangeText={(text, fieldName) => props.valueChanged(text, 'name')}
                                />
                                <TextInput style={styles.input}
                                           placeholder="Your address"
                                           value={props.customer.address}
                                           onChangeText={(text, fieldName) => props.valueChanged(text, 'address')}
                                />
                                <TextInput style={styles.input}
                                           placeholder="Your phone"
                                           value={props.customer.phone}
                                           onChangeText={(text, fieldName) => props.valueChanged(text, 'phone')}
                                />
                            </View>
                        </View>
                        : <Text>Nothing selected</Text>
                    }

                </View>
                <View>
                    <Button
                        onPress={props.onToggleModal}
                        title="Cancel"
                    />

                    {props.orderTotal ?
                        <Button
                            onPress={props.onConfirm}
                            title="Order"
                            disabled={!props.canSubmit}
                        />
                        : null
                    }
                </View>
            </View>
        </Modal>
    );
};

export default OrderConfirm;
