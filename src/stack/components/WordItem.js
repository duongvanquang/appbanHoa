import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    Dimensions, Image, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import CartActions from './redux/cart'


class WordItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
   
    render() {
        const { item } = this.props
        const { uri, price, name, shope } = item
        return (
            <TouchableOpacity
                onPress={() => {
                    this.props.navigation.navigate('Thông Tin Sản Phẩm', { item })
                }}
                activeOpacity={0.3}
                style={styles.containerWord}>
                <Text style={styles.gia}>{price}</Text>
                <Image
                    style={styles.imageProduct}
                    source={{ uri }} />
                <Text style={styles.colorimage}>{name}</Text>
                <Text style={styles.textcolor}>{shope}</Text>
            </TouchableOpacity>
        );
    }
}
const { height, width } = Dimensions.get('screen')
const heightImage = Math.round(width / 2) - 20
const widthImage = Math.round(width / 2) - 20
const mapStateToProps = (state) => {
    return ({
    });
};
const mapDispatchToProps = (dispatch) => { //eslint-disable-line
    return ({
        dispatch,
        addCart: (product) => (dispatch(CartActions.addCart(product))),
    });
};
export default connect(mapStateToProps, mapDispatchToProps)(WordItem);
const styles = StyleSheet.create({
    containerWord: {
        flex: 1,
        justifyContent: 'space-evenly',
        backgroundColor: '#DCDCDC',

    },
    imageProduct: {
        width: widthImage,
        height: heightImage,
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: 'space-evenly',
        marginHorizontal: 10
    },
    gia: {
        fontSize: 25,
        color: 'red',
        marginTop: 5,
        alignItems: 'center'
    },
    colorimage: {
        fontSize: 15,
        color: 'green',
        fontWeight: 'bold'
    },
    textcolor: {
        color: 'blue',
        fontSize: 20,

    },
    viewCart: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginTop: 30,
        marginHorizontal: 10
    },
    textimage: {
        width: 50,
        height: 40,
        resizeMode: 'contain',
    },
})
