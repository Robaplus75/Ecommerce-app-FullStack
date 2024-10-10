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
	async function check_if_logged(){
		const res = await dispatch(login_If_TokenPresent())
		if (res.type==="Login_If_TokenPresent/fulfilled"){
			toast.success("User Already Logged in")
		}
	}
	useEffect(()=>{
		check_if_logged()
	},[])
	return (
		<div>
			<Toaster />
			<Navbar />
			<Outlet />
			<Footer />
		</div>
		)
}