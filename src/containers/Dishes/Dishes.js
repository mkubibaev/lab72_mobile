import React, {Component} from 'react';
import {View, FlatList, Text, TouchableOpacity, Image, ActivityIndicator} from 'react-native'
import Checkout from "../../components/Checkout/Checkout";
import {connect} from "react-redux";
import styles from '../../styles';
import {fetchDishes} from "../../store/actions/dishesActions";
import {addDish, createOrder, removeDish} from "../../store/actions/orderActions";
import OrderConfirm from "../../components/OrderConfirm/OrderConfirm";

class Dishes extends Component {
    state = {
        showModal: false,
        refreshDishes: false,
        customer: {
            name: '',
            address: '',
            phone: ''
        },
        canSubmit: false

    };

    componentDidMount() {
        this.props.fetchDishes();
    }

    toggleModal = () => {
        this.setState({showModal: !this.state.showModal})
    };

    pullToRefresh = () => {
        this.props.fetchDishes();
    };

    valueChanged = (text, fieldName) => {
        const customer = {...this.state.customer};
        customer[fieldName] = text;

        if (this.state.customer.name !== '' &&
            this.state.customer.address !== '' &&
            this.state.customer.phone !== '') {

            this.setState({customer, canSubmit: true})
        } else {

            this.setState({customer, camSubmit: false})
        }


    };

    orderHandler = orderData => {
        Object.keys(orderData).forEach(id => {
            if (orderData[id] === 0) {
                delete orderData[id];
            }
        });

        orderData.customer = {...this.state.customer};
        this.props.createOrder(orderData).then(this.toggleModal);

        const customer = {name: '', address: '', phone: ''};
        this.setState({customer, canSubmit: false});
    };

    convertToArr = obj => {
        return Object.keys(obj).map(id => {
            return {...obj[id], id};
        });
    };

    render() {

        if (this.props.error) {
            return <Text>{this.props.error}</Text>
        }

        const dishesMenu = (
            <View style={styles.container}>
                <FlatList
                    refreshing={this.state.refreshDishes}
                    onRefresh={() => this.pullToRefresh()}
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
                    customer={this.state.customer}
                    valueChanged={this.valueChanged}
                    canSubmit={this.state.canSubmit}
                    onConfirm={() => this.orderHandler(this.props.orders)}
                />
            </View>
        );


        return this.props.loading ? <ActivityIndicator style={styles.loader} size="large" />
            : dishesMenu;

    }
}

const mapStateToProps = state => ({
    dishes: state.dishes.dishes,
    orders: state.order.orders,
    delivery: state.order.delivery,
    orderTotal: state.order.orderTotal,
    loading: state.dishes.loading
});

const mapDispatchToProps = dispatch => ({
    fetchDishes: () => dispatch(fetchDishes()),
    addDish: (id, price) => dispatch(addDish(id, price)),
    removeDish: (id, price) => dispatch(removeDish(id, price)),
    createOrder: orderData => dispatch(createOrder(orderData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dishes);

