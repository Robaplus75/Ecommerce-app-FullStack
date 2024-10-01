import {Link} from 'react-router-dom'
import {FaGithub, FaTwitter, FaFacebook, FaLinkedin}  from 'react-icons/fa'

export default function Footer(){
	return (
		<footer className="bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24">
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
				<div>
					<h3 className="text-xl font-semibold">e-Shop</h3>
					<p className="mt-4">your one-step for all your needs. Shop with use and experience the best online shopping experience</p>
				</div>
				<div className="flex flex-col md:items-center">
					<h4 className="text-lg font-semibold">Quick Links</h4>
					<ul className="mt-4 space-y-2">
						<li>
							<Link to='/' className="hover:underline">Home</Link>
						</li>
						<li>
							<Link to='/shop' className="hover:underline">Shop</Link>
						</li>
						<li>
							<Link to='/contact' className="hover:underline">Contact</Link>
						</li>
						<li>
							<Link to='/about' className="hover:underline">About</Link>
						</li>
					</ul>
				</div>
				<div className="">
					<h4 className="text-lg font-semibold">Follow us</h4>
					<div className="flex space-x-4 mt-4">
						<a href="" className="hover:text-gray-400"><FaFacebook /></a>
						<a href="" className="hover:text-gray-400"><FaTwitter /></a>
						<a href="" className="hover:text-gray-400"><FaGithub /></a>
						<a href="" className="hover:text-gray-400"><FaLinkedin /></a>
					</div>
					<form className="flex items-center justify-center mt-8">
						<input className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600" type="email" />
						<button className="text-white px-4 py-2 rounded-r-lg bg-red-600 border border-gray-600">Subscribe</button>
					</form>
				</div>
			</div>
			<div className="mt-8 border-t border-gray-700 pt-4">
				<div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
					<p>&copy; 2024 e-shop All rights reserved</p>
					<div className="flex space-x-4 mt-4 md:mt-0">
						<a href="" className="hover:underline">Privacy Policy</a>
						<a href="" className="hover:underline">Terms & Conditions</a>
					</div>
				</div>
			</div>
		</footer>
	)
}