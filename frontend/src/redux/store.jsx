import {configureStore} from '@reduxjs/toolkit'
import productReducer from './productSlice'
import cartReducer from './cartSlice'
import orderReducer from './orderSlice'

const store = configureStore({
	reducer: {
		cart: cartReducer,
		product: productReducer,
		order: orderReducer
	}
})

export default store;