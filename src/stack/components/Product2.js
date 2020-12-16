import React, { Component } from 'react';
import {
    View, Text, StyleSheet,
    Dimensions, Image, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import CartActions from '../components/redux/cart'


class Product2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
    }
    render() {
        const { product , addPlusCart,count} = this.props
        const { uri, price, name, shope } = product
        return (
            <View style={{ flex: 1 }}>
                <View
                    style={styles.containerWord}>
                    <View>
                        <Text style={styles.gia}>{price}</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={styles.imageProduct}
                            source={{ uri }} />
                        <View style={styles.imgaetext}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.removeCart(product)
                                    this.props.navigation.navigate('cart')
                                }}>
                                <Text style={styles.textimage}> DELETE</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.textcolor}> {name} </Text>
                        <Text style={styles.textcolor}> {shope}</Text>
                        <View style={styles.contaiberbutton}>
                            <TouchableOpacity onPress={() => {
                                addPlusCart(product, this.state.count + 1 )
                                this.setState({ count: this.state.count + 1 })
                            }}>
                                <Text style={styles.texttouchble}>+</Text>
                            </TouchableOpacity>
                            <Text style={styles.texttouchble}> {this.state.count}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    if (this.state.count !== 0) {
                                        addPlusCart(product, this.state.count - 1 )
                                        this.setState({ count: this.state.count - 1 })
                                    }
                                }}>
                                <Text style={styles.texttouchble}>-</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const { height, width } = Dimensions.get('screen')
const heightImage = Math.round(width / 2) - 20
const widthImage = Math.round(width / 2) - 20
const mapStateToProps = (state) => {
    return ({
    });
}
const mapDispatchToProps = (dispatch) => { //eslint-disable-line
    return ({
        addCart: (product) => (dispatch(CartActions.addCart(product))),
        removeCart: (product) => (dispatch(CartActions.removeCart(product))),
        addPlusCart: (product,count) => (dispatch(CartActions.addPlusCart(product,count))),
        
    });
};
export default connect(mapStateToProps, mapDispatchToProps)(Product2)

const styles = StyleSheet.create({
    containerWord: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
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
    contaiberbutton: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: 200, marginTop: 20, height: 40,
        backgroundColor: '#F5F5F5',
        borderWidth: 1,
        borderRadius: 5
    },
    imgaetext: {
        backgroundColor: 'red',
        justifyContent: 'space-between', alignItems: 'center',
        marginTop: 10, height: 30, width: 150,
        borderRadius: 10, borderWidth: 1,
        marginLeft: 25
    },
    textimage: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    texttouchble: {
        color: 'green',
        fontSize: 30
    }
})
