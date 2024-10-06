import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {api_auth} from './api'

const initialState = {
	products: [],
	searchTerm: '',
	filteredData: [],
	isLoading: false,
}

export const getProducts = createAsyncThunk("GetProducts", async ()=>{
	const response = await api_auth.get('/products/')
	return response.data
})

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers:{
		setProducts(state, action){
			state.products = action.payload
		},
		setSearchTerm(state, action){
			state.searchTerm= action.payload
			state.filteredData = state.products.filter(
				product=> product.name.toLowerCase().includes(state.searchTerm.toLowerCase()))
		}
	},
	extraReducers: (builder)=>{
		builder.addCase(getProducts.pending, (state, action)=>{
			state.isLoading = true
		});
		builder.addCase(getProducts.fulfilled, (state, action)=>{
			state.products = action.payload
			console.log(action.payload)
			state.isLoading = false
		});
		builder.addCase(getProducts.rejected, (state, action)=>{
			state.isLoading = false
		});
	}

})

export const {setProducts, setSearchTerm} = productSlice.actions
export default productSlice.reducer