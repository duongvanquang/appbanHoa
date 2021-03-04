import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import WordItem from './WordItem';
const axios = require('axios')



export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Product:[]
            
        };
    }
    componentDidMount() {
        const that = this
        axios.get('https://apphoaproject.herokuapp.com/Product')
          .then(function (response) {
            // handle success
            //console.log(response.data.Product);
          
            that.setState({Product:response.data.Product})
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
      
      }
   
    renderItemWords = ({ item }) => {
        const { navigation } = this.props
        return (< WordItem navigation={navigation} item={item} />)
    }
    render() {
        const { Product } = this.state;
        return (
            <FlatList
                style={styles.containertext}
                data={Product}
                renderItem={this.renderItemWords}
                keyExtractor={(WordItem) => WordItem._id.toString()} 
                numColumns={2}/>
        );
    }
}
const styles = StyleSheet.create({
    containertext: {
        paddingHorizontal: 5,
        flex: 1,
        backgroundColor: 'white'
    },
})

