import Image from "next/image";

import burger from "../../public/burger.png";

export function BurgerButton({ isMenuShown, setIsMenuShown }) {
	return (
		<Image
			className={`lg:hidden w-[30px] ${
				isMenuShown ? "z-[11] fixed right-[20px]" : ""
			}`}
			src={burger}
			alt="menu"
			onClick={setIsMenuShown}
		/>
	);
}
