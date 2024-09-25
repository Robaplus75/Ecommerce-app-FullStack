import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	products: [],
	totalQuantity: 0,
	totalPrice: 0
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action){
			const newItem = action.payload
			const itemIndex = state.products.find((item) => item.id === newItem.id)
			if (itemIndex) {
				itemIndex.quantity++;
				itemIndex.totalPrice += newItem.price
			}else{
				state.products.push({
					id: newItem.id,
					name: newItem.name,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
					image: newItem.image
				})
			}
			state.totalPrice += newItem.price
			state.totalQuantity++;
		},
		removeFromCart(state, action){
			const cartItem = state.products.find((item)=>item.id===action.payload)
			if (cartItem){
				state.totalQuantity-= cartItem.quantity;
				state.totalPrice -= (cartItem.quantity * cartItem.price);
				state.products = state.products.filter(item=>item.id !== action.payload)
			}
		},
		increaseQuantity(state, action){
			const cartItem = state.products.find((item)=>item.id===action.payload)
			if (cartItem){
				cartItem.quantity++
				cartItem.totalPrice += cartItem.price
				state.totalQuantity += 1
				state.totalPrice += cartItem.price
			}
		},
		decreaseQuantity(state, action){
			const cartItem = state.products.find((item)=>item.id===action.payload)
			if (cartItem && cartItem.quantity > 1){
				cartItem.quantity--
				cartItem.totalPrice -= cartItem.price
				state.totalQuantity -= 1
				state.totalPrice -= cartItem.price
			}
		}
	}
})

export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity} = cartSlice.actions
export default cartSlice.reducer