import {Link} from 'react-router-dom';
import { Search } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { User } from 'lucide-react';
import { useSelector } from 'react-redux';
import Modal from './Modal'
import Login from './Login'
import Register from './Register'
import { useState } from 'react'

export default function Navbar(){
	const products = useSelector((store)=>store.cart.products)
	const [isModelOpen, setIsModelOpen] = useState(false)
	const [isLogin, setIsLogin] = useState(true)
	return (
		<nav className="bg-white-500 shadow-md">
			<div className="container px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
				<div className="text-lg font-bold">
					<Link to="/">e-SHOP</Link>
				</div>
				<div className="relative flex-1 mx-4">
					<form>
						<input type="text" placeholder="Search Product" className="w-full border py-2 px-4"/>
						<Search className="absolute top-3 right-3 text-red-500" />
					</form>
				</div>
				<div className="flex items-center space-x-4">
					<Link to="/cart" className="relative">
						<ShoppingCart className="text-lg"/>
						{products.length > 0 && (
							<span className="absolute top-0 text-xs w-3 left-5 bg-red-600 rounded-full flex justify-center items-center text-white">{products.length}</span>
						)}
					</Link>
					<button onClick={()=>setIsModelOpen(true)} className="hidden md:block">
						Login | Register
					</button>
					<button onClick={()=>setIsModelOpen(true)} className="block md:hidden">
						<User />
					</button>
				</div>
			</div>
			<div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
				<Link to="/" className="hover:underline">Home</Link>
				<Link to="/shop" className="hover:underline">Shop</Link>
				<Link to="/" className="hover:underline">Contact</Link>
				<Link to="/" className="hover:underline">About</Link>
			</div>
			<Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen} >
				{isLogin ? <Login setIsLogin={setIsLogin} /> : <Register  setIsLogin={setIsLogin}/>}
			</Modal>
		</nav>
	)
}