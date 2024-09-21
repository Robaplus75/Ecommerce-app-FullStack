import { ShoppingCart } from 'lucide-react';

export default function InfoSection(){
	const infoItems = [
    {
        icon: <ShoppingCart className="text-3xl text-red-600"/>,
        title: 'Free Shipping',
        description: 'Get your orders delivered with no extra cost',
    },
    {
        icon: <ShoppingCart className="text-3xl text-red-600"/>,
        title: 'Secure Payments',
        description: 'Your payment information is protected and secure',
    },
    {
        icon: <ShoppingCart className="text-3xl text-red-600"/>,
        title: 'Exclusive Offers',
        description: 'Enjoy special deals and discounts every week',
    },
    {
        icon: <ShoppingCart className="text-3xl text-red-600"/>,
        title: 'Fast Delivery',
        description: 'Receive your orders quickly with our efficient shipping',
    },
    {
        icon: <ShoppingCart className="text-3xl text-red-600"/>,
        title: '24/7 Support',
        description: 'Our support team is available round the clock to assist you',
    }
];

	return (
			<div className="bg-white pb-8 pt-12">
				<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
					{infoItems.map((item, index)=>(
						<div key={index} className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 cursor-pointer">
							{item.icon}
							<h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
							<p className="mt-2 text-gray-600">{item.description}</p>
						</div>
					))}
				</div>
			</div>
		)
}