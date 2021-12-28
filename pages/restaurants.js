import path from 'path';
import fs from 'fs';
import Meta from '../components/meta';
import Navbar from '../components/navbar';
import Header from '../components/header';
import Script from 'next/script';
import RestaurantSection from '../components/restaurantSection';
import Footer from '../components/footer';

export default function Restaurants({ restaurants }) {
	return (
		<>
			<Meta />
			<Script
				async
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5012852881889165"
				crossorigin="anonymous"
			></Script>
			<Navbar />
			<Header title="Restaurants" />
			<main>
				<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
					<div className="bg-white">
						{restaurants.map((restaurant, index) => (
							<RestaurantSection
								restaurant={restaurant}
								key={index}
							/>
						))}
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

export async function getStaticProps() {
	const restaurantsDirectory = path.join(process.cwd(), 'restaurants');
	const filenames = fs.readdirSync(restaurantsDirectory);

	const restaurants = filenames.map((filename) => {
		const filePath = path.join(restaurantsDirectory, filename);
		const fileContents = fs.readFileSync(filePath, 'utf8');

		return JSON.parse(fileContents);
	});
	return {
		props: {
			restaurants,
		},
	};
}
