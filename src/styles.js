import {StyleSheet} from "react-native";

export default styles = StyleSheet.create({
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
        fontSize: 24,
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
    },
    checkout: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: '#a0000f',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    checkoutText:  {
        fontSize: 24,
        color: '#fff'
    },
    checkoutBtn: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#eee',
        borderWidth: 1,
        borderColor: '#781E27',
    },
    modal: {
        flex: 1,
        paddingTop: 30,
        paddingBottom: 10,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
    },
    modalTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },
    modalDish : {
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    modalPrices: {
        marginTop: 30,
    },
    modalPrice: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5
    },
    modalDishes: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    modalText: {
        fontSize: 20,
    },
    loader: {
        marginTop: 100,
    },
    form: {
        marginTop: 30
    },
    formTitle: {
        fontSize: 18,
        marginBottom: 5
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 5,
        marginBottom: 5
    }
});
