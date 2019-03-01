import React, {Component} from 'react';
import {View, FlatList, Text, TouchableOpacity, Image, Modal} from 'react-native'
import Checkout from "../../components/Checkout/Checkout";
import {connect} from "react-redux";
import styles from '../../styles';
import {fetchDishes} from "../../store/actions/dishesActions";
import {addDish, createOrder, removeDish} from "../../store/actions/orderActions";
import OrderConfirm from "../../components/OrderConfirm/OrderConfirm";

class Dishes extends Component {
    state = {
        showModal: false
    };

    componentDidMount() {
        this.props.fetchDishes();
    }

    toggleModal = () => {
        this.setState({showModal: !this.state.showModal})
    };

    orderHandler = orderData => {

        Object.keys(orderData).forEach(id => {
            if (orderData[id] === 0) {
                delete orderData[id];
            }
        });

        this.props.createOrder(orderData).then(this.toggleModal);
    };

    convertToArr = obj => {
        return Object.keys(obj).map(id => {
            return {...obj[id], id};
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.convertToArr(this.props.dishes)}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            style={styles.dish}
                            onPress={() => this.props.addDish(item.id, item.price)}
                        >
                            <Image
                                style={styles.dishImg}
                                source={{uri: item.image}}
                            />
                            <View>
                                <Text style={styles.dishName}>{item.name}</Text>
                                <Text style={styles.dishPrice}>{item.price} KGS</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
                <Checkout
                    pressed={this.toggleModal}
                    orderTotal={this.props.orderTotal}
                />
                <OrderConfirm
                    show={this.state.showModal}
                    orders={this.props.orders}
                    dishes={this.props.dishes}
                    onRemove={this.props.removeDish}
                    onToggleModal={this.toggleModal}
                    delivery={this.props.delivery}
                    orderTotal={this.props.orderTotal}
                    onConfirm={() => this.orderHandler(this.props.orders)}
                />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    dishes: state.dishes.dishes,
    orders: state.order.orders,
    delivery: state.order.delivery,
    orderTotal: state.order.orderTotal,
});

const mapDispatchToProps = dispatch => ({
    fetchDishes: () => dispatch(fetchDishes()),
    addDish: (id, price) => dispatch(addDish(id, price)),
    removeDish: (id, price) => dispatch(removeDish(id, price)),
    createOrder: orderData => dispatch(createOrder(orderData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dishes);

