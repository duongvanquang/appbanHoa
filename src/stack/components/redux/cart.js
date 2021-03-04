import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  addCart: ['item'],
  removeCart:['item'],
  addPlusCart:['item', 'count' ],
  removeAll:['item'],
  setProduct: ['product'],
})
export const cartTypes = Types;
export default Creators;
/* ------------- Initial State ------------- */
let productsInit = []
export const INITIAL_STATE = {
  products: productsInit,
  cart: [],
  thongbao:[],
};
/* ------------- Reducers ------------- */
const addCart = (state, { item }) => {
  return { 
    ...state, cart: [...state.cart.filter(c =>c._id != item._id), item] }
};
const removeCart =(state,{item})=>{
  return {...state,cart:[...state.cart.filter(c=>c._id !== item._id)]}
}
const addPlusCart = (state,{item,count }) =>{
   let cart = state.cart 
   const index = cart.findIndex(c => c._id === item._id )
   if(index >=0) cart[index] = {...item, count }
   return {...state,cart}
}
const removeAll = (state) =>{
  const cart =  state.cart
  return {...state,cart:[],thongbao:[...state.thongbao,cart]}
}
const setProduct = (state, { products }) =>{
  productsInit = products
  return { ...state, products }
}
export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_CART]: addCart,
  [Types.REMOVE_CART]:removeCart,
  [Types.ADD_PLUS_CART]:addPlusCart,
  [Types.REMOVE_ALL]:removeAll,
  [Types.SET_PRODUCT]: setProduct,


})
