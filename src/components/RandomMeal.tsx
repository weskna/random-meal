import React, { useEffect, useState } from "react";

const RandomMeal = () => {
	const [randomMeal, setRandomMeal] = useState([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const fetchRandomMeal = async () => {
		const response = await fetch(
			"https://www.themealdb.com/api/json/v1/1/random.php"
		);
		if (!response.ok) {
			throw new Error("Data coud not be fetched!");
		} else {
			setIsLoading(false);
			return response.json();
		}
	};

	useEffect(() => {
		fetchRandomMeal()
			.then((data) => {
				setRandomMeal(data.meals[0]);
			})
			.catch((e) => {
				console.log(e.message);
			});
	}, []);

	return (
		<section
			id="random-meal"
			className="max-w-7xl mx-auto px-4 py-20 xl:py-32"
		>
			<header className="max-w-lg mx-auto text-center">
				<h2 className="text-4xl font-extrabold ">
					Feeling adventurous?
					<span className="font-extrabold text-primary sm:block text-2xl">
						Take your taste buds on a wild ride with a random meal!
					</span>
				</h2>
			</header>
			{!isLoading && (
				<div className="pt-12 pb-16 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2">
						<div className="relative z-10 lg:py-16">
							<div className="relative h-64 sm:h-80">
								<img
									alt={randomMeal.strMeal}
									src={randomMeal.strMealThumb}
									className="absolute inset-0 h-full w-full object-cover"
								/>
							</div>
						</div>

						<div className="relative flex items-center bg-background">
							<span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-background"></span>

							<div className="p-8 sm:p-16 lg:p-24">
								<h2 className="text-2xl font-bold sm:text-3xl">
									{randomMeal.strMeal}
								</h2>

								<p className="mt-4 text-gray-600">
									{`${randomMeal.strInstructions?.substr(
										0,
										250
									)} ...`}
								</p>

								<a
									href="#"
									className="mt-8 inline-block rounded border border-orange-600 bg-orange-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-orange-600 focus:outline-none focus:ring active:text-primary"
								>
									Read more
								</a>
							</div>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default RandomMeal;
