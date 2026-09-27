import {Outlet} from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import {Toaster} from 'react-hot-toast'
import {useEffect} from 'react'
import {login_If_TokenPresent} from '../redux/userSlice'
import {useDispatch} from 'react-redux'
import toast from 'react-hot-toast'

export default function Container(){
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(login_If_TokenPresent()).then((res) => {
			if (res.type === "Login_If_TokenPresent/fulfilled") {
				toast.success("User Already Logged in")
			}
		})
	},[dispatch])
	return (
		<div>
			<Toaster />
			<Navbar />
			<Outlet />
			<Footer />
		</div>
		)
}
