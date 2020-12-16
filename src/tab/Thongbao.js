import React, { Component } from 'react';
import { View, Text,FlatList ,StyleSheet} from 'react-native';
import { connect } from 'react-redux';

class Thongbao extends Component {
  renderProduct = ({ item }) => {
    return (
      <View style={{ borderBottomWidth: 1, paddingVertical: 10, paddingHorizontal: 16 }}>
        <Text style={{ color: 'red', fontSize: 17, fontWeight: 'bold' }}>Thông báo thanh toán </Text>
        <Text style={{ color: 'green', fontSize: 15, marginTop: 5 }}>Những mặt hàng đã mua {item.map(i => i.name).join(', ')}</Text>
      </View>
    )
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#CC99FF' }}>
        <FlatList
          style={styles.container}
          data={this.props.thongbao}
          renderItem={this.renderProduct}
          // numColumns={2}
          ListHeaderComponent={() => (<View height={5} />)}
          ListFooterComponent={() => (<View height={5} />)}
        />
      </View>
    );
  }
} 
const mapStateToProps = (state) => {
  return ({
    thongbao: state?.cart?.thongbao
  });
};
const mapDispatchToProps = (dispatch) => { //eslint-disable-line
  return ({
    dispatch,
  });
};
export default connect(mapStateToProps, mapDispatchToProps)(Thongbao)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
})