import { ProductDetails } from "@/app/components/ProductDetails";

import { productDetailsData } from "@/app/api/productDetailsData";

export default async function ProductId({ params }) {
	const data = await productDetailsData(params.category, params.id);
	return <ProductDetails data={data} />;
}
