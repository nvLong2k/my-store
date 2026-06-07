"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { products } from "../mock/products";

const CATEGORY_FILTERS = [
    "All",
    "Hat",
    "Apparel",
    "Interesting Phones",
    "Thermo Cups",
    "Drinking Cups",
    "Home Decor",
    "Flags & Banners",
    "Car Decor",
    "Canvas Bags",
] as const;

type CategoryFilter = (typeof CATEGORY_FILTERS)[number];

export default function Products() {
    const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
    const [search, setSearch] = useState<string>("");

    const filtered = useMemo(() => {
        return products.filter((p) => {
            const matchCategory =
                activeCategory === "All" ||
                (activeCategory === "Interesting Phones" && p.type === "interestingPhone") ||
                (activeCategory === "Thermo Cups" && p.type === "thermoCup") ||
                (activeCategory === "Drinking Cups" && p.type === "drinkingCup") ||
                (activeCategory === "Hat" && p.type === "hat") ||
                (activeCategory === "Apparel" && p.type === "apparel") ||
                (activeCategory === "Home Decor" && p.type === "homeDecor") ||
                (activeCategory === "Flags & Banners" && p.type === "flagBanner") ||
                (activeCategory === "Car Decor" && p.type === "carDecor") ||
                (activeCategory === "Canvas Bags" && p.type === "canvasBag");

            const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());

            if (search.trim() !== "") return matchSearch;

            return matchCategory;
        });
    }, [activeCategory, search]);

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid grid-cols-12 gap-6">
                {/* Desktop Sidebar */}
                <aside className="hidden md:block md:col-span-3">
                    <div className="sticky top-6 border border-gray-200 rounded-2xl bg-white p-5">
                        {/* Search */}
                        <div>
                            <h2 className="text-sm font-semibold text-gray-900 mb-2">
                                Search
                            </h2>

                            <input
                                type="text"
                                placeholder="Search products..."
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-black"
                            />
                        </div>

                        {/* Categories */}
                        <div className="mt-6">
                            <h2 className="text-sm font-semibold text-gray-900 mb-2">
                                Categories
                            </h2>

                            <div className="flex flex-col gap-2">
                                {CATEGORY_FILTERS.map((filter) => (
                                    <button
                                        key={filter}
                                        onClick={() => {
                                            setActiveCategory(filter)
                                            setSearch("")
                                        }}
                                        className={`text-left px-3 py-2 rounded-xl text-sm transition-colors ${activeCategory === filter
                                            ? "bg-black text-white"
                                            : "hover:bg-gray-100 text-gray-700"
                                            }`}
                                    >
                                        {filter}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main */}
                <main className="col-span-12 md:col-span-9">
                    {/* Mobile Search */}
                    <div className="md:hidden mb-4">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-black"
                        />
                    </div>

                    {/* Mobile Category Chips */}
                    <div className="md:hidden flex overflow-x-auto gap-2 mb-4 pb-1 no-scrollbar">
                        {CATEGORY_FILTERS.map((filter) => (
                            <button
                                key={filter}
                                onClick={() =>
                                    setActiveCategory(filter)
                                }
                                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm border transition-colors ${activeCategory === filter
                                    ? "bg-black text-white border-black"
                                    : "bg-white border-gray-200 text-gray-700"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    {/* Result Count */}
                    <div className="flex items-center justify-between mb-5">
                        <div>
                            <h1 className="text-xl font-semibold text-gray-900">
                                Products
                            </h1>

                            <p className="text-sm text-gray-500 mt-1">
                                {filtered.length} products found
                            </p>
                        </div>
                    </div>

                    {/* Empty */}
                    {filtered.length === 0 ? (
                        <div className="border border-dashed border-gray-300 rounded-2xl py-20 text-center text-sm text-gray-400">
                            No products found.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                            {filtered.map((product) => (
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
                    )}
                </main>
            </div>
        </div>
    );
}