import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import Product from './components/Product';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
})
