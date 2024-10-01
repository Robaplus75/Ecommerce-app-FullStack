import ManCategory from '../assets/Images/man.png'
import WomanCategory from '../assets/Images/woman.png'
import KidCategory from '../assets/Images/kid.png'

export default function CategorySection(){
	const categories = [
			{
				title: 'Men',
				imageUrl: ManCategory,
			},
			{
				title: 'Women',
				imageUrl: WomanCategory,
			},
			{
				title: 'Kids',
				imageUrl: KidCategory,
			},

		]
	return (
			<div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
				{categories.map((category, index)=>(
					<div key={index} className="relative h-64 cursor-pointer transform hover:scale-105 trasition-transform duration-300">
						<img src={category.imageUrl} alt="" className="w-full h-full object-cover rounded-lg shadow-md"/>
						<div className="absolute top-20 left-12">
							<p className="text-xl font-bold">{category.title}</p>
							<p className="text-gray-600">View All</p>
						</div>
					</div>
				))}
			</div>
		)
}