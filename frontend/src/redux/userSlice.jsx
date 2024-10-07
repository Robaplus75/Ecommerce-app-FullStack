import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {api} from './api'

const initialState = {
	isLoggedin: false,
	logged_user: {},
	isLoading: false,
	error: false,
	status: {}
}

export const loginUser = createAsyncThunk("LoginUser", async (userData, thunkAPI)=>{
	try{
		const response = await api.post("/accounts/token/",userData)
		return response.data
	}catch(error){
		return thunkAPI.rejectWithValue(error.response.data)
	}
})

export const signupUser = createAsyncThunk("SignupUser", async (userData, thunkAPI)=>{
	try{
		const response = await api.post("/accounts/", userData)
		return response.data
	}catch(error){
		return thunkAPI.rejectWithValue(error.response.data)
	}
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
			console.log("Login Error: ", action.payload)
			state.status = {'detail':action.payload.detail}
			state.isLoading = false
		});

		builder.addCase(signupUser.pending, (state, action)=>{
			state.isLoading = true
		});
		builder.addCase(signupUser.fulfilled, (state, action)=>{
			state.isLoading = false
		});
		builder.addCase(signupUser.rejected, (state, action)=>{
			state.error = true
			state.status = {"detail":action.payload}
			state.isLoading = false
		});
	}
})

export default userSlice.reducer