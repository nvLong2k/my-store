import Link from "next/link";
import { products } from "../mock/products";
import Image from "next/image"

export default function Products() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product) => (
                <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-colors duration-200"
                >
                    {/* Image */}
                    <div className="relative aspect-square bg-[#f5f4f0] overflow-hidden">
                        <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />

                        <div className="absolute top-2 left-2 flex flex-col gap-1">
                            {product.isNew && (
                                <span className="bg-green-500 text-white text-[11px] font-medium px-2 py-0.5 rounded-sm tracking-wide">
                                    NEW
                                </span>
                            )}

                            {product.origin && (
                                <span className="bg-red-600 text-white text-[11px] font-medium px-2 py-0.5 rounded-sm">
                                    {product.origin}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Info */}
                    <div className="p-3">
                        <h3 className="text-[13px] text-gray-800 leading-snug mb-2.5 line-clamp-2 min-h-9.5">
                            {product.name}
                        </h3>

                        <div className="flex items-center gap-2 flex-wrap mb-1.5">
                            <span className="text-[20px] font-semibold text-[#e0781e]">
                                ${product.price.toFixed(2)}
                            </span>

                            <span className="text-[13px] text-gray-400 line-through">
                                ${product.originalPrice.toFixed(2)}
                            </span>

                            <span className="text-[11px] font-medium text-[#bf5e0a] bg-orange-50 border border-orange-200 px-1.5 py-0.5 rounded">
                                -{product.discount}%
                            </span>
                        </div>

                        <p className="text-[12px] text-gray-400">
                            Avg. production time {product.avgProductionDays} days
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    )
}