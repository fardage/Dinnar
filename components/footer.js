import Link from 'next/link';

export default function Footer() {
	return (
		<div className="bg-gray-900">
			<div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
				<div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
					<p className="text-sm text-gray-500">
						© Copyright {new Date().getFullYear()} Marvin Tseng. All
						rights reserved.
					</p>
					<div className="flex items-center mt-4 space-x-4 sm:mt-0">
						<Link href="/privacy">
							<a className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400">
								Privacy Policy
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
