import { useState } from 'react';
import DishView from './dishView';
import Image from 'next/image';

export default function DishPreview({ dish }) {
	const [open, setOpen] = useState(false);
	function handleClick(e) {
		e.preventDefault();
		setOpen(true);
	}

	return (
		<>
			<DishView open={open} setOpen={setOpen} dish={dish} />
			<div className="group relative">
				<div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80">
					<Image
						src={dish.poster}
						alt={dish.name}
						layout="fill"
						objectFit="cover"
					/>
				</div>
				<div className="mt-4 flex justify-between">
					<div>
						<h3 className="text-sm text-gray-700">
							<a onClick={handleClick}>
								<span
									aria-hidden="true"
									className="absolute inset-0"
								></span>
								{dish.name}
							</a>
						</h3>
						<p className="mt-1 text-sm text-gray-500">
							{dish.description}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
