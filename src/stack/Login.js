import React, { Component } from 'react';
import { View, Image ,StyleSheet, TouchableOpacity} from 'react-native';
import Product from './components/Product';

const cart = require('./components/shopping-cart.png')
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    const { navigation } = this.props
    navigation.setOptions({
        header: (props) => (<View
            style={styles.viewCart}>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('cart')}>
                <Image
                    source={cart}
                    style={styles.textimage}
                />
            </TouchableOpacity>
        </View>)
    })
}
  render() {
    return (
      <View style = {styles.container}>
         <Product navigation = {this.props.navigation}/> 
      </View>
    );
  }
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'blue'
    },
    viewCart: {
      justifyContent: 'flex-end',
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
