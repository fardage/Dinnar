import Head from 'next/head';

export default function Meta() {
	return (
		<Head>
			<title>DinnAR</title>
			<meta name="title" content="DinnAR - Discover Food and Restaurants in 3D and Augmented Reality "/>
			<meta name="description" content="View food from different angles and zoom in on the food. You can also discover restaurants nearby, or search for restaurants in other cities."/>
			<meta name="keywords" content="Food, Zurich, 3D, Augmented Reality, Review, Zoom, Model, Restaurants, Menu"/>
			<meta name="robots" content="index, follow"/>
			<meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
			<meta name="language" content="English"/>
			<meta name="author" content="Marvin Tseng"/>
			<meta property="og:image" content="/hero.jpg" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
}
