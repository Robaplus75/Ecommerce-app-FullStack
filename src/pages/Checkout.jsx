import {FaAngleUp, FaAngleDown} from 'react-icons/fa'
import {useState} from 'react'
import {useSelector} from 'react-redux'

export default function Checkout(){
	const [billingToggle, setBillingToggle] = useState(true)
	const [shippingToggle, setShippingToggle] = useState(false)
	const [paymentToggle, setPaymentToggle] = useState(false)
	const [paymentMethod, setPaymentMethod] = useState('delivery')
	const cart = useSelector(store=>store.cart)

	return (
		<div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
			<h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
			<div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
				<div className="md:w-2/3">
					<div className="border p-2 mb-6">
						<div onClick={()=>setBillingToggle(!billingToggle)} className="flex items-center justify-between">
							<h3 className="text-lg font-semibold mb-2">Billing Information</h3>
							{billingToggle ? <FaAngleUp /> : <FaAngleDown />}	
						</div>
						<div className={`space-y-4 ${billingToggle ? '':'hidden'} transistion duration-300`}>
							<div>
								<div className="block text-gray-700">
									<label htmlFor="">Name</label>
									<input type='text' name="name" placeholder="Enter Name" className="w-full px-3 py-2 border" />
								</div>
							</div>
							<div>
								<div className="block text-gray-700">
									<label htmlFor="">Email</label>
									<input type='email' name="email" placeholder="Enter Email" className="w-full px-3 py-2 border" />
								</div>
							</div>
							<div>
								<div className="block text-gray-700">
									<label htmlFor="">Phone</label>
									<input type='text' name="phone" placeholder="Enter Phone #" className="w-full px-3 py-2 border" />
								</div>
							</div>
						</div>
					</div>
					<div className="border p-2 mb-6">
						<div onClick={()=>setShippingToggle(!shippingToggle)} className="flex items-center justify-between">
							<h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
							{shippingToggle ? <FaAngleUp /> : <FaAngleDown />}	
						</div>
						<div className={`space-y-4 ${shippingToggle ? '':'hidden'} transistion duration-300`}>
							<div>
								<div className="block text-gray-700">
									<label htmlFor="">Address</label>
									<input type='text' name="address" placeholder="Enter Address" className="w-full px-3 py-2 border" />
								</div>
							</div>
							<div>
								<div className="block text-gray-700">
									<label htmlFor="">City</label>
									<input type='text' name="city" placeholder="Enter City" className="w-full px-3 py-2 border" />
								</div>
							</div>
							<div>
								<div className="block text-gray-700">
									<label htmlFor="">Zip Code</label>
									<input type='text' name="zipcode" placeholder="Enter Zip Code" className="w-full px-3 py-2 border" />
								</div>
							</div>
						</div>
					</div>
					<div className="border p-2 mb-6">
						<div onClick={()=>setPaymentToggle(!paymentToggle)} className="flex items-center justify-between">
							<h3 className="text-lg font-semibold mb-2">Payment Method</h3>
							{paymentToggle ? <FaAngleUp /> : <FaAngleDown />}	
						</div>
						<div className={`space-y-4 ${paymentToggle ? '':'hidden'} transistion duration-300`}>
							<div>
								<div className="flex text-gray-700">
									<input type='radio' name="delivery" className="mr-2" checked = {paymentMethod === "delivery"} onChange={()=>setPaymentMethod('delivery')}/>
									<label htmlFor="">Cash on Delivery</label>
								</div>
							</div>
							<div>
								<div className="flex text-gray-700">
									<input type='radio' name="debitcard" className="mr-2" checked={paymentMethod === 'debitcard'} onChange={()=>setPaymentMethod("debitcard")}/>
									<label htmlFor="">Debit Card</label>
								</div>
							</div>
							{paymentMethod === "debitcard" ? 
								<div className="bg-gray-100 p-4 rounded-lg mb-4">
									<h3 className="text-xl font-semibold mb-4">Debit Card Information</h3>
									<div className="mb-4">
										<label className="block text-gray-700 font-semibold mb-2">Card Number</label>
										<input className="border p-2 w-full rounded" required type="text" />
									</div>
									<div className="mb-4">
										<h3 className="block text-gray-700 font-semibold mb-2">Card Holder Name</h3>
										<input className="border p-2 w-full rounded" required type="text" />
									</div>
									<div className="flex justify-between mb-4">
										<div className="w-1/2 mr-2">
											<label className="block text-gray-700 font-semibold mb-2">Expire Date</label>
											<input className="border p-2 w-full rounded" placeholder="MM/YY" type="text" required />
										</div>
										<div className="w-1/2 ml-2">
											<label className="block text-gray-700 font-semibold mb-2">CVV</label>
											<input className="border p-2 w-full rounded" type="text" placeholder="CVV" />
										</div>
										
									</div>
								</div>:
								<div>delivery</div>
							}
						</div>
					</div>

				</div>
				<div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
					<h3 className="text-lg font-semibold mb-4">Order Summary</h3>
					<div className="space-y-4">
						{cart.products.map(product=>(
							<div key={product.id} className="flex justify-between">
								<div className="flex items-center">
									<img className="w-16 h-16 object-contain rounded" src={product.image} alt="" />
									<div className="ml-4">
										<h4 className="text-md font-semibold">{product.name}</h4>
										<p className="text-gray-600">
											${product.price} x {product.quantity}
										</p>
									</div>
								</div>
								<div className="text-gray-800">
									${product.price * product.quantity}
								</div>
							</div>
						))}
					</div>
					<div className="mt-4 border-t pt-4">
						<div className="flex justify-between">
							<span>Total Price:</span>
							<span className="font-semibold">${cart.totalPrice.toFixed(2)}</span>
						</div>
					</div>
					<button className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800">Place Order</button>
				</div>
			</div>
		</div>
	)
}