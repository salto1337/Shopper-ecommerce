export function SizeButton({ size, sizeSelected, setSizeSelected }) {
	return (
		<button
			key={size}
			className={`w-[50px] h-[50px] bg-gray-100 mr-4 mb-2 hover:border-2 hover:border-black ${
				sizeSelected === size ? "border-2 border-black" : ""
			}`}
			onClick={() => {
				setSizeSelected(size);
			}}>
			{size}
		</button>
	);
}
