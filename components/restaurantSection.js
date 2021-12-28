import DishPreview from './dishPreview';
export default function RestaurantSection({ restaurant }) {
	return (
		<div className="max-w-2xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
			<h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
				{restaurant.name}
			</h2>
			<div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
				{restaurant.dishes.map((dish, index) => (
					<DishPreview dish={dish} key={index} />
				))}
			</div>
		</div>
	);
}
