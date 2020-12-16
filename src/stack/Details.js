import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import Product2 from './components/Product2';
import Setting from './Setting';


class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  renderProduct = ({ item: product }) => {
    const { navigation } = this.props
    return (<Product2 navigation={navigation} product={product} />)
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <FlatList
            style={styles.container}
            data={this.props.cart}
            keyExtractor={(item) => item.id.toString()}
            renderItem={this.renderProduct}
            ListHeaderComponent={() => (<View height={5} />)}
            ListFooterComponent={() => (<View height={5} />)}
          />
        </View>
        <View style={styles.containertt}>
          <TouchableOpacity
          onPress = {() =>{
            this.props.navigation.navigate('Setting')
          }}
          >
            <Text style={styles.texttt}>  Thanh Toán </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    flex: 1,
    backgroundColor: 'white'
  },
  containertt: {
    backgroundColor: 'green',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  texttt: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
const mapStateToProps = (state) => {
  return ({
    cart: state?.cart?.cart
  });
};
const mapDispatchToProps = (dispatch) => { //eslint-disable-line
  return ({
    dispatch,
  });
};
export default connect(mapStateToProps, mapDispatchToProps)(Details);




