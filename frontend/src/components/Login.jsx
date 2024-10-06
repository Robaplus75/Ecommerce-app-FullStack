import {useDispatch, useSelector} from 'react-redux'
import {loginUser} from "../redux/userSlice"
import {useState} from 'react'
import toast from 'react-hot-toast'


export default function Login({setIsLogin, setIsModelOpen}){
	const dispatch = useDispatch()
	const isLoading = useSelector(store=>store.user.isLoading)


	async function handleSubmit(e){
		e.preventDefault()
		const formData = new FormData(e.target)
		const userData = {
			email: formData.get("email"),
			password: formData.get("password")
		}
		console.log(userData)
		const res =  await dispatch(loginUser(userData))
		console.log(res)
		if (res.type === "LoginUser/fulfilled"){
			toast.success('Login Successful!')
			setIsModelOpen(false)
		}else{
			toast.error("Login Failed. Please Try again")
		}
		
	}

	if (isLoading){
		return <h1>Loading...</h1>
	}
	

	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">Login</h2>
			<form onSubmit={(e)=>handleSubmit(e)}>
				<div className="mb-4">
					<label className="block text-gray-700">Email</label>
					<input className="w-full px-3 py-2 border" type="email" name="email" placeholder="Enter Email" />
				</div>
				<div className="mb-4">
					<label className="block text-gray-700">Password</label>
					<input className="w-full px-3 py-2 border" name="password" type="password" />
				</div>
				<div className="mb-4 flex items-center justify-between">
					<label className="inline-flex items-center">
						<input type="checkbox" className="form-checkbox" />
						<span className="ml-2 text-gray-700">Remember Me</span>
					</label>
					<a className="text-red-800" href="">Forgot Password?</a>
				</div>
				<div className="mb-4">
					<button type="submit" className="w-full bg-red-600 text-white py-2">Login</button>
				</div>
			</form>
			<div className="text-center">
				<span className="text-gray-700">Don't Have an Account?</span>
				<button onClick={()=>setIsLogin(false)} className="text-red-800">Sign Up</button>
			</div>
		</div>
	)
}