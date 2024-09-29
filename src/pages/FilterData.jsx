import {useSelector} from 'react-redux'
import ProductCard from '../components/ProductCard'

export default function FilterData(){
	const filteredProducts = useSelector(store => store.product.filteredData)	
	return (
		<div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
			<h2 className="text-2xl font-bold mb-6 text-center">Products</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
				{filteredProducts.map((product,index)=>(
					<ProductCard product={product} />
				))}
			</div>
		</div>
	)
}