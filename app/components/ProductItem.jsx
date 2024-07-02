import Image from "next/image";
import Link from "next/link";

export function ProductItem({ item }) {
	return (
		<div>
			<Link href={`/${item.category}/${item.id}`}>
				<div className="flex flex-col gap-[5px] transition-all  xl:hover:scale-105">
					<Image className="w-[450px] lg:w-[300px]" src={item.image} alt={item.name} width={300} height={350} />
					<p className="text-[16px]">{item.name}</p>
					<p className="flex gap-[10px]">
						<span className="font-medium">${item.new_price}</span>
						<span className="line-through text-gray-500">
							${item.old_price}
						</span>
					</p>
				</div>
			</Link>
		</div>
	);
}
