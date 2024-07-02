import { Collections } from "./components/Collections";
import { Exclusive } from "./components/Exclusive";
import { Hero } from "./components/Hero";
import { Newsletter } from "./components/Newsletter";
import { WomenPopular } from "./components/WomenPopular";

export default function Home() {
	return (
		<>
			<Hero />
			<WomenPopular />
			<Exclusive />
			<Collections />
			<Newsletter />
		</>
	);
}
