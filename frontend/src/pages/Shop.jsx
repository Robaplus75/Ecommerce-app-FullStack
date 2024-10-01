import {useSelector} from 'react-redux'
import ProductCard from '../components/ProductCard'

export default function Shop(){
	const products = useSelector(state=>state.product)
	return (
		<div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
			<h2 className="text-2xl font-bold mb-6 text-center">SHOP</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
				{products.products.map((product,index)=>(
					<ProductCard product={product} />
				))}
			</div>
		</div>
	)
}