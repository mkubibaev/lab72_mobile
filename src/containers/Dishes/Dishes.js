import React, {Component} from 'react';
import {View, FlatList, Text, StyleSheet, TouchableOpacity, Image, Modal} from 'react-native'
import Checkout from "../../components/Checkout/Checkout";
import {connect} from "react-redux";
import {fetchDishes} from "../../store/actions/dishesActions";

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

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.dishes}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <TouchableOpacity style={styles.dish}>
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
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.showModal}
                    onRequestClose={() => {}}
                    >
                    <View style={{marginTop: 22}}>
                        <View>
                            <Text>Hello World!</Text>

                            <TouchableOpacity onPress={this.toggleModal}>
                                <Text style={{color: 'red'}}>Hide Modal</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        flex: 1,
        backgroundColor: '#000'
    },
    dish: {
        marginBottom: 10,
        backgroundColor: "#781E27",
        flexDirection: 'row',
        alignItems: 'center'
    },
    dishName: {
        color: '#fff',
        fontSize: 30,
        marginBottom: 5
    },
    dishPrice: {
        color: '#fff',
        fontSize: 20
    },
    dishImg: {
        width: 100,
        height: 100,
        marginRight: 10
    }
});

const mapStateToProps = state => ({
    dishes: state.dishes,
    delivery: state.delivery,
    orderTotal: state.orderTotal,
});

const mapDispatchToProps = dispatch => ({
    fetchDishes: () => dispatch(fetchDishes())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dishes);

