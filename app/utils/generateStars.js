import Image from "next/image";
import full_star from "../../public/star_icon.png";

export function generateStars(stars) {
	return Array(stars)
		.fill()
		.map((_, index) => <Image key={index} src={full_star} alt="star" />);
}
