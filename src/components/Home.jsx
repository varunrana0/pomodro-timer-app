import React from "react";
import Navigation from "./Navigation";
import Work from "./Work";

function Home() {
	return (
		<div className="bg-gray-900 h-full py-10">
			<div className="max-w-4xl mx-auto h-full w-full flex flex-col items-center justify-center">
				<Navigation />
				<Work />
			</div>
		</div>
	);
}

export default Home;
