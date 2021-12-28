import Script from 'next/script';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

export default function dishPreview({ open, setOpen, dish }) {
	return (
		<>
			<Script
				type="module"
				src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
			></Script>
			<Transition.Root show={open} as={Fragment}>
				<Dialog
					as="div"
					className="fixed z-10 inset-0 overflow-y-auto"
					onClose={setOpen}
				>
					<div
						className="flex min-h-screen text-center md:block md:px-2 lg:px-4"
						style={{ fontSize: 0 }}
					>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" />
						</Transition.Child>

						{/* This element is to trick the browser into centering the modal contents. */}
						<span
							className="hidden md:inline-block md:align-middle md:h-screen"
							aria-hidden="true"
						>
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
							enterTo="opacity-100 translate-y-0 md:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 md:scale-100"
							leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
						>
							<div className="flex text-base text-left transform transition w-full md:inline-block md:max-w-3xl md:px-4 md:my-8 md:align-middle lg:max-w-7xl">
								<div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
									<button
										type="button"
										className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
										onClick={() => setOpen(false)}
									>
										<span className="sr-only">Close</span>
										<XIcon
											className="h-6 w-6"
											aria-hidden="true"
										/>
									</button>

									<div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
										<div className="aspect-w-5 aspect-h-4 rounded-lg bg-gray-100 overflow-hidden sm:col-span-8 lg:col-span-7">
											<model-viewer
												poster={dish.poster}
												src={dish.src}
												ios-src={dish.iosSrc}
												alt={dish.description}
												skybox-image={dish.skyboxImage}
												ar
												auto-rotate
												camera-controls
											/>
										</div>
										<div className="sm:col-span-4 lg:col-span-5">
											<h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">
												{dish.name}
											</h2>
											<p className="text-2xl text-gray-900">
												{dish.description}
											</p>
											<p className="pt-5 text-gray-600">
												{dish.review}
											</p>
										</div>
									</div>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
		</>
	);
}
