import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {api_auth} from './api'

const initialState = {
	access_token: "",
	refresh_token: "",
	isLoggedin: false,
	logged_user: {},
	isLoading: false,
	error: false,
	status: {}
}

export const loginUser = createAsyncThunk("LoginUser", async (userData)=>{
	const response = await api_auth.post("/accounts/token/",userData)
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
			const res = action.payload
			state.access_token = res.access
			state.refresh_token = res.refresh
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