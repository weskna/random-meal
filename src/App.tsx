import { Header } from "./components/Header";
import Hero from "./components/Hero";
import RandomMeal from "./components/RandomMeal";
import { MealsList } from "./components/MealsList";

function App() {
	return (
		<>
			<Header />
			<section className="bg-gradient-to-t from-background min-h-[calc(100vh-50px)]">
				<Hero />
				<MealsList />
			</section>
			<RandomMeal />
		</>
	);
}

export default App;
