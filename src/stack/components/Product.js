import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import WordItem from './WordItem';


export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: [
                { id: 1, uri: 'https://happyflower.vn/app/uploads/2020/11/BoHoaKhoXmas_SmallSize-600x600.jpg', price: '399', name: 'BÓ HOA KHÔ XMAS – SMALL SIZE', shope: 'Dịch vụ giao hoa'},
                { id: 2, uri: 'https://happyflower.vn/app/uploads/2019/11/Chau_Dau_XmasTree-600x600.jpg', price: '1499', name: 'CHẬU DÂU XMAS TREE', shope: 'Dịch vụ giao hoa' },
                {id: 3, uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnUsj0kST_fyYIOs4Jjr_WJgb_Sd8rnrhcXDlCvmoIhV-HHUOtFJCAGZ9uxA&usqp=CAc', price: '1500', name: 'BÓ HOA BABY HỒNG - KOREAN STYLE', shope: 'Dịch vụ giao hoa' },
                {id: 4, uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfdWe5iehL72j8RP_fv2hGSHLCQDGVyFyT42Db-7levfq6nvlQ4qjZddwaCg&usqp=CAc', price: '2500', name: 'BÓ HOA BẰNG TIỀN - TÌNH YÊU TO BỰ', shope: 'Dịch vụ giao hoa' }
            ]
        };
    }
    renderItemWords = ({ item }) => {
        const { navigation } = this.props
        return (< WordItem navigation={navigation} item={item} />)
    }
    render() {
        const { words } = this.state;
        return (
            <FlatList
                style={styles.containertext}
                data={words}
                renderItem={this.renderItemWords}
                keyExtractor={(WordItem) => WordItem.id.toString()} 
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

