import Link from "next/link";
import Image from "next/image";
import { CatalogProduct } from "../types/catalog";

interface Props {
    product: CatalogProduct
}

export default function CatalogComponent({ product }: Props) {
    return (
        <Link
            key={product.id}
            href={`/catalog/${product.id}`}
            className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-gray-300"
        >
            {/* Image */}
            <div className="relative aspect-square bg-[#f5f4f0] overflow-hidden">
                <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="eager"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
            </div>

            <div className="p-4 space-y-2">
                <div className="flex items-start justify-between gap-3">
                    <h3 className="text-gray-800 text-sm font-medium leading-snug line-clamp-2 group-hover:text-orange-600 transition-colors">
                        {product.name}
                    </h3>
                </div>

                <div className="text-xs text-gray-500">
                    SKU: {product.sku}
                </div>

                <div className="text-xs text-gray-500">
                    {product.category}
                </div>
            </div>
        </Link>
    )
}