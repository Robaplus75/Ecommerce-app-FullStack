import {configureStore} from '@reduxjs/toolkit'
import productReducer from './productSlice'
import cartReducer from './cartSlice'
import orderReducer from './orderSlice'
import userReducer from './userSlice'

const store = configureStore({
	reducer: {
		cart: cartReducer,
		product: productReducer,
		order: orderReducer,
		user: userReducer,
	}
})

export default store;