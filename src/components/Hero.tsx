import React from "react";
import { Search } from "./Search";

const Hero = () => {
	return (
		<section className="mx-auto max-w-screen-xl px-4 pt-32 pb-10 lg:flex lg:items-center">
			<div className="mx-auto max-w-2xl text-center">
				<h1 className="text-2xl sm:text-5xl">
					Find your next meal here
					<span className="font-semibold text-primary sm:block">
						Delicious dishes await
					</span>
				</h1>

				<p className="mt-4 sm:text-lg/relaxed">
					Are you tired of endlessly scrolling through recipe
					websites, only to find recipes that don't quite hit the
					spot? Look no further than our meal search website! With a
					vast database of recipes and the ability to filter by
					dietary restrictions and ingredients, you'll be able to find
					the perfect meal in no time. Say goodbye to boring dinners
					and hello to culinary inspiration with our meal search
					website.
				</p>
			</div>
		</section>
	);
};

export default Hero;
