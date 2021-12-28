/* This example requires Tailwind CSS v2.0+ */
import { ViewGridIcon, UsersIcon } from '@heroicons/react/outline';

const features = [
	{
		name: 'Skip boring menu cards',
		description:
			'Augmented reality is a new form of computing that brings the digital world into the real world. ' +
			'View your food as 3d models and enjoy the deliciousness in 3d.',
		icon: ViewGridIcon,
	},
	{
		name: 'Find restaurants',
		description:
			'Find the best restaurants in your area with this free, easy to use search tool.',
		icon: UsersIcon,
	},
];

export default function Features() {
	return (
		<div className="py-12 bg-zinc-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="lg:text-center">
					<h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
						Food
					</h2>
					<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
						Find the best restaurants
					</p>
					<p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
						Explore and enjoy the best restaurants, food and drinks
						in AR.
					</p>
				</div>

				<div className="mt-10">
					<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
						{features.map((feature) => (
							<div key={feature.name} className="relative">
								<dt>
									<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
										<feature.icon
											className="h-6 w-6"
											aria-hidden="true"
										/>
									</div>
									<p className="ml-16 text-lg leading-6 font-medium text-gray-900">
										{feature.name}
									</p>
								</dt>
								<p className="mt-2 ml-16 text-base text-gray-500">
									{feature.description}
								</p>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}
