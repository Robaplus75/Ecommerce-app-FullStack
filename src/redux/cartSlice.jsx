import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	products: [],
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		
	}
})

export const {additem} = cartSlice.actions
export default cartSlice.reducer