import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import Product from './components/Product';
import CartActions from './components/redux/cart'
class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choose: 0
    };
  }
  renderItem = (uri, title, number) => {
    const choose = this.state.choose === number
    return (
      <View style={styles.tainer}>
        <View style={styles.containertt}>
          <Image
            style={styles.image}
            source={{ uri }}
          />
          <Text style={styles.textqq}>{title}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            this.setState({ choose: number })
          }}
          style={styles.checkbok}>
          {choose && <View style={styles.checkbokk}>
          </View>}
        </TouchableOpacity>
      </View>
    )
  }
  render() {
    const cart = this.props.cart
    let sum = 0
    cart.forEach(pro => {
      sum += pro.price * (pro?.count || 1)
    });
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.containerveiw}>
            <Text style={styles.containerText}>Phương Thức Thanh Toán</Text>
            {this.renderItem('https://cdn6.aptoide.com/imgs/0/3/3/033eb366f28487375a19b714cc568d8c_icon.png',
              'ViAriPay', 1)}
            {this.renderItem('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROcSg0oq6R6Q4Oq_Xys3KjGB3F05VZguGyHg&usqp=CAU',
              'Thẻ tín dụng/Ghi nợ', 2)}
            {this.renderItem(
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMGbvZFPDQ4mR96pxTHMGq-4O4ChLm-C3LHw&usqp=CAU',
              'Thẻ ATM (internet Banking)', 3
            )}
            {this.renderItem(
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1IqB3o86GAzoCol3tQ1OC1wEVple7PkX-Sg&usqp=CAU',
              'Thanh toán khi nhận hàng', 4
            )}
          </View>
        </ScrollView>
        {cart.map((product) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <View style={{  marginRight: 5,flex: 1 }}>
              <Text style={{ color: 'red',fontSize: 20}}>{product.name}</Text>
            </View>
            <Text style  = {{ color:'red', fontSize:20}}> {product.price} x {product?.count || 1}</Text>
          </View>
        ))}
        <Text style={{
          olor: 'blue',
          fontWeight: 'bold',
          fontSize: 20,
        }}>Tong : {sum} </Text>
        <View style={{ backgroundColor: 'green', height: 60, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Trang chu')
            this.props.removeAll()
          }}>
            <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}> Xac nhan </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return ({
    cart: state?.cart?.cart
  });
};
const mapDispatchToProps = (dispatch) => { //eslint-disable-line
  return ({
    dispatch,
    removeAll: (product) => (dispatch(CartActions.removeAll(product))),
  });
};
export default connect(mapStateToProps, mapDispatchToProps)(Setting);

const styles = StyleSheet.create({
  containerveiw: {
    flex: 1,
    paddingHorizontal: 15
  },
  containerText: {
    color: '#CD853F',
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center'
  },
  tainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    justifyContent: 'space-between',
    borderBottomWidth: 1

  },
  image: {
    width: 30,
    height: 40,
    marginTop: 10
  },
  containertt: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  textqq: {
    fontSize: 20,
    marginLeft: 15,
  },
  checkbok: {
    borderRadius: 15,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    borderWidth: 2,
    marginTop: 10,
    borderColor: 'gray'
  },
  checkbokk: {
    borderRadius: 10,
    backgroundColor: 'blue',
    width: 20,
    height: 20,
  },
  viewmap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5
  },
  viewtt: {
    marginRight: 5,
    flex: 1
  },
  textmap: {
    color: 'red',
    fontSize: 20
  },
  textprice: {
    color: 'green',
    fontSize: 20
  },
  textsum: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  }

})
