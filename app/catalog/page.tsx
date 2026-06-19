"use client";

import { useMemo, useState } from "react";
import { catalogProducts } from "@/mock/catalog";
import Catalog from "@/components/Catalog";

export default function Page() {
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
                            <Catalog
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}