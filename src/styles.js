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
    modalBtn: {
        marginBottom: 5,
        textAlign: 'center',
        backgroundColor: '#17a2b8',
        fontSize: 20,
        color: '#fff',
        borderColor: '#17a2b8',
        paddingVertical: 10,
    },
    modalDish : {
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    modalPrice: {
        marginTop: 30,
        fontWeight: 'bold',
        fontSize: 20,

    },
    modalDishes: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    modalText: {
        fontSize: 20,
    }
});
