"use client";

import Link from "next/link";
import Image from "next/image";
import { products } from "../mock/products";
import { catalogProducts } from "../mock/catalog";

export default function Products() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <main>
                <div className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-gray-200 mb-6">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
                            <Link
                                href="/"
                                className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border border-gray-200 hover:bg-black hover:text-white transition"
                            >
                                Home
                            </Link>
                            <Link
                                href="/products"
                                className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border border-gray-200 hover:bg-black hover:text-white transition"
                            >
                                🇺🇸 Made in USA
                            </Link>

                            <Link
                                href="/catalog"
                                className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border border-gray-200 hover:bg-black hover:text-white transition"
                            >
                                🇻🇳 Made in Vietnam
                            </Link>
                        </div>
                    </div>
                </div>

                <h1 className="text-4xl font-semibold mt-12 mb-4">
                    Made in USA
                </h1>

                {
                    products.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
                            {products.map((product) => (
                                <Link
                                    key={product.id}
                                    href={`/products/${product.id}`}
                                    className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-gray-300"
                                >
                                    {/* Glow */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-b from-transparent via-transparent to-orange-50 pointer-events-none z-0" />

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

                                        {/* Badges */}
                                        <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
                                            {product.origin && (
                                                <span className="bg-red-600 text-white text-[11px] font-medium px-2 py-0.5 rounded-md transition-transform duration-300 group-hover:scale-105">
                                                    {product.origin}
                                                </span>
                                            )}

                                            {product.isNew && (
                                                <span className="bg-green-500 text-white text-[11px] font-medium px-2 py-0.5 rounded-md transition-transform duration-300 group-hover:scale-105">
                                                    NEW
                                                </span>
                                            )}

                                            {product.exclusiveRegion && (
                                                <span className="bg-blue-600 text-white text-[11px] font-medium px-2 py-0.5 rounded-md transition-transform duration-300 group-hover:scale-105">
                                                    USA
                                                </span>
                                            )}
                                        </div>

                                        {/* Hover button */}
                                        <div className="absolute inset-x-0 bottom-4 flex justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10">
                                            <div className="bg-white/95 backdrop-blur px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                                                View Product
                                            </div>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="relative z-10 p-4">
                                        <h3 className="text-sm text-gray-800 leading-snug mb-3 line-clamp-2 min-h-10 transition-colors duration-300 group-hover:text-orange-600">
                                            {product.name}
                                        </h3>

                                        <div className="flex items-center gap-2 flex-wrap mb-2">
                                            <span className="text-xl font-semibold text-orange-500 transition-transform duration-300 group-hover:scale-105">
                                                $
                                                {(product.price - 1).toFixed(2)}
                                            </span>

                                            <span className="text-sm text-gray-400 line-through">
                                                $
                                                {product.originalPrice.toFixed(2)}
                                            </span>

                                            <span className="text-[11px] font-medium text-orange-700 bg-orange-50 border border-orange-200 px-1.5 py-0.5 rounded transition-all duration-300 group-hover:bg-orange-100">
                                                -
                                                {(
                                                    (1 -
                                                        (product.price - 1) /
                                                        product.originalPrice) *
                                                    100
                                                ).toFixed(0)}
                                                %
                                            </span>
                                        </div>

                                        <p className="text-xs text-gray-400 transition-colors duration-300 group-hover:text-gray-500">
                                            Avg. production time {product.avgProductionDays} days
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )
                }

                <h1 className="text-4xl font-semibold mt-12 mb-4">
                    Made in Vietnam
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {catalogProducts.map((product) => (
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
                    ))}
                </div>
            </main>
        </div>
    );
}