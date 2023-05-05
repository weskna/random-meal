import React, { useRef, useState } from "react";
import { MealCard } from "./MealCard";
import { Search } from "./Search";
import { Meals } from "./Meals";
import { ReactComponent as Loader } from "../assets/loader.svg";

export const MealsList = () => {
	const mealsContainer = useRef(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [query, setQuery] = useState<string>("");
	const [isDirty, setIsDirty] = useState<boolean>(false);
	const [error, setError] = useState<string>("");
	const [meals, setMeals] = useState([]);

	const getMeals = async () => {
		const response = await fetch(
			`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
		);
		if (!response.ok) {
			throw new Error("Data coud not be fetched!");
		} else {
			return response.json();
		}
	};

	const searchMeals = () => {
		event?.preventDefault();
		setIsDirty(true);
		setIsLoading(true);
		if (query.length > 2) {
			setError("");
			getMeals()
				.then((data) => {
					setMeals(data.meals);
					mealsContainer.current.scrollIntoView();
				})
				.catch((e) => {
					setError(e.message);
				});
		} else {
			setError("Your query should be at least 2 characters long.");
		}
		setIsLoading(false);
	};

	return (
		<section>
			<Search
				onSubmit={() => searchMeals()}
				setQuery={() => setQuery(event?.target.value)}
			>
				{error && (
					<small className="text-xs font-semibold text-orange-700">
						{error}
					</small>
				)}
			</Search>
			<div
				ref={mealsContainer}
				className={`max-w-7xl mx-auto ${isDirty && "py-10 px-4"}`}
			>
				<div className="flex justify-center ">
					{isLoading && <Loader />}
				</div>

				{!meals && isDirty && <div>No meals found.</div>}

				{!isLoading && <Meals meals={meals} />}
			</div>
		</section>
	);
};
