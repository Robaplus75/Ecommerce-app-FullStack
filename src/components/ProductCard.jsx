import { Star } from 'lucide-react';
export default function ProductCard({product}){
	return (
		<div className="relative bg-white p-4  border rounded shadow-md transform hover:scale-105 transition-transform duration-300  cursor-pointer">
			<img src={product.image} alt={product.name} className="w-full h-48 mb-4 object-contain"/>
			<h3 className="text-lg font-semibold">{product.name}</h3>
			<p className="text-gray-500">${product.price}</p>
			<div className='flex items-center mt-2'>
				<Star className="text-yellow-500"/>
				<Star className="text-yellow-500"/>
				<Star className="text-yellow-500"/>
				<Star className="text-yellow-500"/>
				<Star className="text-gray-500"/>
			</div>
			<div className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transistion-all duration-200">
				<span className="group-hover:hidden">+</span>
				<span className="hidden group-hover:block">Add to cart</span>
			</div>
		</div>
	)
}