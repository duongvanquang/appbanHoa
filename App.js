import React, { Component } from 'react';
import { View, Text,Image } from 'react-native'
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/stack/Login';
import Profiler from './src/stack/Profiler';
import Details from './src/stack/Details';
import Setting from './src/stack/Setting';
import { Provider } from 'react-redux';
import Thongbao from './src/tab/Thongbao';
import Canhan from './src/tab/Canhan';


const home = require('./src/homee.png')
const bell = require('./src/bell_icon_128467.png')
const infor = require('./src/personal-information-interface-symbol.png')
const reducers = combineReducers({
  cart: require('./src/stack/components/redux/cart').reducer,
})
const store = createStore(reducers);
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function Mytabs() {
  return (
    <Tab.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let source;
        if (route.name === 'Trang chu') {
          source =home 
        } else if (route.name === 'Thong bao') {
          source = bell
        } else if (route.name === 'Ca nhan') {
          source = infor
        }
        // You can return any component that you like here!
        return <Image
          style={{ width: 30, height: 30, resizeMode: 'contain' }}
          source={source} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
  >
      
      <Stack.Screen name="Trang chu" component={Login} />
      <Tab.Screen name="Thong bao" component={Thongbao} />
      <Tab.Screen name="Ca nhan" component={Canhan} />
    </Tab.Navigator>
  )
}
class AppStack extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Trang chu" component={Mytabs} />
          <Stack.Screen name="Thông Tin Sản Phẩm" component={Profiler} />
          <Stack.Screen name="cart" component={Details} />
          <Stack.Screen name="Setting" component={Setting} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App = () => (
  <Provider store={store}>
    <AppStack />
  </Provider>
)
