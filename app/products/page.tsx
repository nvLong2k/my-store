"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { products } from "@/src/mock/products";
import Product from "@/src/components/Product";

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

export default function Page() {
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
                                        className={`text-left px-3 py-2 rounded-xl text-sm transition-colors hover:cursor-pointer ${activeCategory === filter
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
                                <Product
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}