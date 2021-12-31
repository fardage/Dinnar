import Link from 'next/link';
import Image from 'next/image';
import phoneImage from '../public/hero.jpg'

export default function Hero() {
	return (
		<div className="relative bg-white overflow-hidden">
			<div className="max-w-7xl mx-auto">
				<div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
					<main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
						<div className="sm:text-center lg:text-left">
							<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
								<span className="block xl:inline">
									Discover Restaurants in
								</span>{' '}
								<span className="block text-red-600 xl:inline">
									Augmented Reality
								</span>
							</h1>
							<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
								Discover restaurants in augmented reality. Find
								out what&apos;s available and what you can
								expect. Check out the menus and photos. Search
								and compare locations.
							</p>
							<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
								<div className="rounded-md shadow">
									<Link href="/restaurants">
										<a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10">
											View in AR
										</a>
									</Link>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
			<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 relative">
				<Image
					className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
					src={phoneImage}
					layout="fill"
					size="100%"
					alt="A phone"
					placeholder="blur"
					quality={25}
					priority
				/>
			</div>
		</div>
	);
}
