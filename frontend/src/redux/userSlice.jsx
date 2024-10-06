import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {api} from './api'

const initialState = {
	isLoggedin: false,
	logged_user: {},
	isLoading: false,
	error: false,
	status: {}
}

export const loginUser = createAsyncThunk("LoginUser", async (userData)=>{
	const response = await api.post("/accounts/token/",userData)
	return response.data
})

const userSlice = createSlice({
	name: "User",
	initialState,

	extraReducers: (builder)=>{
		builder.addCase(loginUser.pending, (state, action)=>{
			state.isLoading = true
		});
		builder.addCase(loginUser.fulfilled, (state, action)=>{
			const auth_tokens = JSON.stringify(action.payload)
			localStorage.setItem('auth_tokens', auth_tokens)
			state.isLoading = false
		});
		builder.addCase(loginUser.rejected, (state, action)=>{
			state.error = true
			state.status = {'detail':'Wrong Email or Password'}
			state.isLoading = false
		});
	}
})

export default userSlice.reducer