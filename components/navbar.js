import Link from 'next/link';

const navigation = [
	{ name: 'Home', href: '/' },
	{ name: 'Restaurants', href: '/restaurants' },
];

export default function Navbar() {
	return (
		<nav className="flex items-center justify-between flex-wrap bg-red-400 p-6">
			<div className="flex items-center flex-shrink-0 text-white mr-6">
				<Link href="/">
					<a>
						<svg
							className="fill-current h-8 w-8 mr-2"
							width="125"
							height="125"
							viewBox="0 0 125 125"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M61.44,0A61.46,61.46,0,1,1,18,18,61.21,61.21,0,0,1,61.44,0ZM75.28,69.88a1.92,1.92,0,0,1,2.21-1.46,1.78,1.78,0,0,1,1.6,2,27.32,27.32,0,0,1-1.73,6,17.62,17.62,0,0,1-2.92,4.75,22.38,22.38,0,0,1-3.38,3.16A24.45,24.45,0,0,1,67,86.86a2,2,0,0,1-2.62-.7,1.68,1.68,0,0,1,.77-2.38,21.41,21.41,0,0,0,3.44-2.13A18.75,18.75,0,0,0,71.42,79a14.59,14.59,0,0,0,2.34-3.84,24.22,24.22,0,0,0,1.52-5.29Zm-14.53-43A19.23,19.23,0,0,1,73.48,32c4.55,4,8.2,9.92,10.69,16.55A59.45,59.45,0,0,1,88,68.87c0,7.3-1.69,13.92-5.4,18.19-.49.56-1,1.07-1.46,1.53-5,4.78-12.07,7.23-19.07,7.43s-14-1.9-19-6.19c-.48-.42-1-.86-1.4-1.34C37,83.55,34.9,76,34.9,67.86a58.13,58.13,0,0,1,3.59-19.61c2.31-6.31,5.65-12,9.7-15.83,3.65-3.48,7.89-5.58,12.56-5.58Zm9,8.7a13.76,13.76,0,0,0-9-3.76c-3.07,0-6,1.52-8.64,4-3.5,3.34-6.43,8.33-8.5,14a53.81,53.81,0,0,0-3.28,18.07c0,7,1.65,13.45,5.43,17.42.32.33.67.66,1,1,3.87,3.36,9.46,5,15.11,4.84a23.1,23.1,0,0,0,15.3-5.9c.42-.4.8-.8,1.14-1.19,2.9-3.33,4.21-8.87,4.21-15.14A54.88,54.88,0,0,0,79,50.11c-2.23-5.92-5.41-11.18-9.29-14.57Zm31.3-13.71a56,56,0,1,0,16.41,39.61,55.83,55.83,0,0,0-16.41-39.61Z" />
						</svg>
					</a>
				</Link>
				<Link href="/">
					<a>
						<span className="font-semibold text-xl tracking-tight">
							DinnAR
						</span>
					</a>
				</Link>
				<div className="hidden md:block">
					<div className="ml-10 flex items-baseline space-x-4">
						{navigation.map((item) => (
							<Link href={item.href} key={item.name}>
								<a
									className={
										'px-3 py-2 rounded-md text-sm font-medium text-white-300 hover:bg-white hover:text-neutral-900'
									}
									aria-current={
										item.current ? 'page' : undefined
									}
								>
									{item.name}
								</a>
							</Link>
						))}
					</div>
				</div>
			</div>
		</nav>
	);
}
