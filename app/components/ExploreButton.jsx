"use client";

export function ExploreButton({ handleExplore, children }) {
	return (
		<button
			onClick={handleExplore}
			className="bg-gray-100 rounded-[40px] py-3 px-8 transition-all hover:scale-105">
			{children}
		</button>
	);
}
