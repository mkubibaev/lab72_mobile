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
    modalTitle: {
        fontSize: 30,
        fontWeight: 'bold',

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
    }
});
