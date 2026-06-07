"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { catalogProducts } from "../mock/catalog";

export default function Catalog() {
    const [search, setSearch] = useState<string>("");

    const filtered = useMemo(() => {
        return catalogProducts.filter((product) => {
            return product.name
                .toLowerCase()
                .includes(search.toLowerCase().trim());
        });
    }, [search]);

    return (
        <div className="max-w-7xl mx-auto px-4 py-6 w-full">
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filtered.map((product) => (
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
        </div>
    );
}