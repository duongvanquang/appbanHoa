import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  addCart: ['item'],
  removeCart:['item'],
  addPlusCart:['item', 'count' ],
  removeAll:['item']
})
export const cartTypes = Types;
export default Creators;
/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  products: [
    { id: 1, uri: 'https://happyflower.vn/app/uploads/2020/11/BoHoaKhoXmas_SmallSize-600x600.jpg', price: '399.000₫', name: 'BÓ HOA KHÔ XMAS – SMALL SIZE', shope: 'Dịch vụ giao hoa' },
    { id: 2, uri: 'https://happyflower.vn/app/uploads/2019/11/Chau_Dau_XmasTree-600x600.jpg', price: '1.499.000₫', name: 'CHẬU DÂU XMAS TREE', shope: 'Dịch vụ giao hoa' },
    { id: 3, uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnUsj0kST_fyYIOs4Jjr_WJgb_Sd8rnrhcXDlCvmoIhV-HHUOtFJCAGZ9uxA&usqp=CAc', price: '1.500.000 đ', name: 'BÓ HOA BABY HỒNG - KOREAN STYLE', shope: 'Dịch vụ giao hoa' },
    { id: 4, uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfdWe5iehL72j8RP_fv2hGSHLCQDGVyFyT42Db-7levfq6nvlQ4qjZddwaCg&usqp=CAc', price: '2.500.000 đ', name: 'BÓ HOA BẰNG TIỀN - TÌNH YÊU TO BỰ', shope: 'Dịch vụ giao hoa' }
  ],
  cart: [],
  thongbao:[],
};
/* ------------- Reducers ------------- */
const addCart = (state, { item }) => {
  return { ...state, cart: [...state.cart.filter(c =>c.id != item.id), item] }
};
const removeCart =(state,{item})=>{
  return {...state,cart:[...state.cart.filter(c=>c.id !== item.id)]}
}
const addPlusCart = (state,{item,count }) =>{
   let cart = state.cart 
   const index = cart.findIndex(c => c.id === item.id )
   if(index >=0) cart[index] = {...item, count }
   return {...state,cart}
}
const removeAll = (state) =>{
  const cart =  state.cart
  return {...state,cart:[],thongbao:[...state.thongbao,cart]}
}
export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_CART]: addCart,
  [Types.REMOVE_CART]:removeCart,
  [Types.ADD_PLUS_CART]:addPlusCart,
  [Types.REMOVE_ALL]:removeAll,

})
