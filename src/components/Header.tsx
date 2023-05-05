import React, { ReactComponentElement } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";

export const Header = () => {
	return (
		<header aria-label="Site Header" className="bg-white px-4 py-2">
			<div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between">
				<Logo className="h-12" />

				<nav
					aria-label="Site Nav"
					className="items-center justify-center gap-8 text-sm font-medium flex"
				>
					<a
						href="#random-meal"
						className=" bg-primary text-white px-4 py-2 rounded-md uppercase md:hover:bg-orange-700 transition duration-150 ease-in-out"
					>
						I'm feeling adventurous!
					</a>
				</nav>
			</div>
		</header>
	);
};
