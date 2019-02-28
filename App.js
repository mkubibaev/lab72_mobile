import React from 'react';
import Dishes from "./src/containers/Dishes/Dishes";
import {View, StyleSheet} from 'react-native';
import Header from "./src/components/Header/Header";

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Header/>
                <Dishes/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flex: 1
    }
});

