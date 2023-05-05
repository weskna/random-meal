import React from "react";

type Props = {
	onSubmit: () => void;
	setQuery: (event: string) => void;
	children: React.ReactNode;
};

export const Search = ({ onSubmit, setQuery, children }: Props) => {
	return (
		<form
			className="max-w-xl mx-auto py-10 flex justify-center"
			onSubmit={onSubmit}
		>
			<div className="max-w-7xl mx-auto w-full">
				<div className="relative">
					<input
						className="w-full h-10 rounded-lg border-primary pe-10 text-sm placeholder-gray-700 bg-transparent focus:z-10"
						placeholder="Find your next meal ..."
						type="text"
						onChange={() => setQuery(event?.target.value)}
					/>

					<button
						type="submit"
						className="absolute inset-y-0 end-0 rounded-r-lg p-2 block w-full rounded bg-orange-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-orange-700 focus:outline-none focus:ring active:bg-primary sm:w-auto"
					>
						<span className="sr-only">Submit Search</span>
						<svg
							className="h-5 w-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								clipRule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								fillRule="evenodd"
							></path>
						</svg>
					</button>
				</div>
				{children}
			</div>
		</form>
	);
};
