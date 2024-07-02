import { Subpage } from "../components/Subpage";
import { productsData } from "../api/productsData";
import mens_banner from "../../public/banner_mens.png";
import womens_banner from "../../public/banner_women.png";
import kids_banner from "../../public/banner_kids.png";

export default async function Category({ params }) {
	const category = params.category;

	const data = await productsData(category);

	const banners = {
		men: mens_banner,
		women: womens_banner,
		kid: kids_banner,
	};

	return <Subpage data={data} banner={banners[category]} />;
}
