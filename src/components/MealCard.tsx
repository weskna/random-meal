import React from "react";

export const MealCard = ({ meal }) => {
	return (
		<article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
			<img
				alt="Office"
				src={meal.strMealThumb}
				className="h-56 w-full object-cover"
			/>

			<div className="bg-white p-4 sm:p-6">
				<a href="#">
					<h3 className="mt-0.5 text-lg text-gray-900">
						{meal.strMeal}
					</h3>
				</a>

				<p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
					{`${meal.strInstructions?.substr(0, 250)} ...`}
				</p>
			</div>
		</article>
	);
};
