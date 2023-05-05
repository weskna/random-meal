import React from "react";
import { MealCard } from "./MealCard";

type Props = {
	meals: [];
};

export const Meals = ({ meals }: Props) => {
	return (
		<div className="grid grid-cols-3 gap-10">
			{meals?.map((meal) => (
				<div key={meal.idMeal}>
					<MealCard meal={meal} />
				</div>
			))}
		</div>
	);
};
