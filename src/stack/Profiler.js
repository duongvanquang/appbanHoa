import React, { Component } from 'react';
import {
  View, Text,
  StyleSheet, Image,
  Dimensions
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import Product from './components/Product';
import CartActions from './components/redux/cart'

 class Profiler extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { route } = this.props
    const item = route?.params?.item
    const { uri, name, price, shope } = item
    return (
      <View style={styles.container}>
        <View style={styles.containert}>
          <Image
            style={styles.imageProduct}
            source={{ uri }} />
        </View>
        <View style={{ flex: 0.5 }}>
          <Text style={styles.text1}>{name}</Text>
          <Text style={styles.text2}>{price}</Text>
          <Text style={styles.text3}>{shope}</Text>
          <TouchableOpacity 
          onPress = {() =>{
            this.props.addCart(item)
            this.props.navigation.navigate('cart',{item})
          }}
          activeOpacity = {0.4}
          >
           <View style  = {styles.viewimage}>
           <Text style = {styles.textimage}> ĐẶT HÀNG NGAY </Text>
           </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const { height, width } = Dimensions.get('screen')
const heightImage = Math.round(width)
const widthImage = Math.round(width / 2)

const mapStateToProps = (state) => {
  return ({
    
  });
};
const mapDispatchToProps = (dispatch) => { //eslint-disable-line
  return ({
    addCart: (item) => (dispatch(CartActions.addCart(item)))
  });
};
export default connect(mapStateToProps, mapDispatchToProps)(Profiler);

const styles = StyleSheet.create({
  containertext: {
    paddingHorizontal: 5,
    flex: 1,
    backgroundColor: 'white'
  },
  imageProduct: {
    width: widthImage,
    height: heightImage,
    alignSelf: 'center',
    borderRadius: 10
  },
  containerprofile: {
    flex: 1
  },
  container:{
    flex: 1, flexDirection: 'row',
     marginTop: 10, 
     justifyContent: 'space-evenly' 
  },
  containert:{ flex: 0.5,
     marginHorizontal: 10 
    },
    text1:{ 
      color: 'green', 
      fontSize: 20 
    },
text2:{
   color: 'red', 
   fontSize: 30
   },
   text3:{ 
     color: 'blue',
      fontSize: 20 
    },
viewimage:{ 
  backgroundColor:'#4F4F4F',
  width:150, 
  height:30,
  marginTop:10,
  borderRadius:10,
  borderWidth:1},
  textimage:{ padding:5, color:'#00CC00'}

})
