import toast from 'react-hot-toast'
import {useDispatch, useSelector} from 'react-redux'
import {signupUser} from '../redux/userSlice'

export default function Register({setIsLogin, setIsModelOpen}){
	const dispatch = useDispatch()
	const isLoading = useSelector(store=>store.user.isLoading)

	async function handleSubmit(e){
		e.preventDefault()
		const formData = new FormData(e.target)
		const userData = {
			'email': formData.get('email'),
			'first_name': formData.get('name'),
			'password': formData.get('password')
		}

		if (formData.get("password") === formData.get("c_password")){
			const response = await dispatch(signupUser(userData))
			console.log("Response: ", response)
			if (response.type === "SignupUser/fulfilled"){
				toast.success('Registration Successful!')
				setIsLogin(true)
			}else{
				toast.error("Registration Failed: "+ ((response.payload.email)? response.payload.email : response.payload.detail))
			}
		}else{
			toast.error("Passwords do not Match")
		}
	}

	if (isLoading){return <h1>Loading</h1>}

	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">Sign Up</h2>
			<form onSubmit={(e)=>handleSubmit(e)}>
				<div className="mb-4">
					<label className="block text-gray-700">Name</label>
					<input className="w-full px-3 py-2 border" name="name" type="text" placeholder="Enter Name" />
				</div>
				<div className="mb-4">
					<label className="block text-gray-700">Email</label>
					<input className="w-full px-3 py-2 border" name="email" type="email" placeholder="Enter Email" />
				</div>
				<div className="mb-4">
					<label className="block text-gray-700">Password</label>
					<input className="w-full px-3 py-2 border" name="password" type="password" placeholder="Password"/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700">Confirm Password</label>
					<input className="w-full px-3 py-2 border" name="c_password" type="password" placeholder="Confirm Password"/>
				</div>
				<div className="mb-4">
					<button type="submit" className="w-full bg-red-600 text-white py-2">Sign Up</button>
				</div>
			</form>
			<div className="text-center">
				<span className="text-gray-700">Already Have an Account?</span>
				<button onClick={()=>setIsLogin(true)} className="text-red-800">Login</button>
			</div>
		</div>
	)
}