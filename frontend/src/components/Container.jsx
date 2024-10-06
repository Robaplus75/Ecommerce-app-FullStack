import {Outlet} from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import {Toaster} from 'react-hot-toast'

export default function Container(){
	return (
		<div>
			<Toaster />
			<Navbar />
			<Outlet />
			<Footer />
		</div>
		)
}