import React, {Component} from 'react';
import axios from '../../axios-dishes';
import {View, FlatList, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import Checkout from "../../components/Checkout/Checkout";

class Dishes extends Component {
    state = {
        dishes: []
    };

    componentDidMount() {
        axios.get('dishes.json').then(response => {
            const dishes = Object.keys(response.data).map(id => {
                return {...response.data[id], id}
            });

            this.setState({dishes});

        })
    }


    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dishes}
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
                <Checkout/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green'
    },
    dish: {
        marginBottom: 30,
        backgroundColor: "#000",
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

export default Dishes;

