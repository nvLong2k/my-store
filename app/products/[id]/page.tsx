// app/products/[id]/page.tsx
"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { use, useState } from "react";

import { products } from "@/src/mock/products";

const TABS = ["Description", "Size Guide"] as const;
type Tab = (typeof TABS)[number];

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const product = products.find((p) => String(p.id) === id);
    if (!product) notFound();

    const [activeTab, setActiveTab] = useState<Tab>("Description");
    const [activeThumb, setActiveThumb] = useState<number>(0);
    const [activeColor, setActiveColor] = useState<number>(0);
    const [activeSize, setActiveSize] = useState<number>(0);

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            {/* Top */}
            <div className="grid md:grid-cols-2 gap-10 mb-10">
                {/* Images */}
                <div>
                    <div className="relative aspect-square bg-[#f5f4f0] rounded-xl overflow-hidden border border-gray-200 ">
                        <Image
                            src={product.images[activeThumb]}
                            alt={product.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    {product.images.length > 1 && (
                        <div className="flex gap-2 mt-3 flex-wrap">
                            {product.images.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveThumb(i)}
                                    className={`w-14 h-14 rounded-md overflow-hidden border-2 transition-colors shrink-0 ${activeThumb === i ? "border-[#e0781e]" : "border-transparent"
                                        }`}
                                >
                                    <Image src={img} alt="" width={56} height={56} className="object-cover w-full h-full" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Info */}
                <div>
                    <h1 className="text-lg font-medium leading-snug mb-4">{product.name}</h1>

                    {/* Colors */}
                    {product.colors && product.colors.length > 0 && (
                        <div className="mb-4">
                            <p className="text-[13px] text-gray-500 mb-2">Color:</p>
                            <div className="flex gap-2">
                                {product.colors.map((c, i) => (
                                    <button
                                        key={i}
                                        title={c.label}
                                        onClick={() => setActiveColor(i)}
                                        style={{ background: c.hex }}
                                        className={`w-7 h-7 rounded-full border-2 transition-colors ${activeColor === i ? "border-gray-800" : "border-transparent"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Sizes */}
                    {product.sizes && product.sizes.length > 0 && (
                        <div className="mb-5">
                            <p className="text-[13px] text-gray-500 mb-2">Size:</p>
                            <div className="flex gap-2 flex-wrap">
                                {product.sizes.map((s, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveSize(i)}
                                        className={`border rounded-md px-4 py-1.5 text-[13px] transition-colors ${activeSize === i
                                            ? "border-[#4b9bdf] text-gray-800"
                                            : "border-gray-300 text-gray-600"
                                            }`}
                                    >
                                        {s.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Meta */}
                    {product.meta && (
                        <div className="grid grid-cols-3 border border-gray-200 rounded-lg overflow-hidden mb-5 text-[13px]">
                            {[
                                { label: "Material", value: product.meta.material },
                                { label: "Weight", value: product.meta.weight },
                                { label: "Avg. production time", value: `${product.avgProductionDays} days` },
                            ].map((m, i) => (
                                <div key={i} className={`p-3 ${i < 2 ? "border-r border-gray-200" : ""}`}>
                                    <p className="text-gray-400 text-[11px] mb-1">{m.label}</p>
                                    <p className="font-medium text-gray-800">{m.value}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Promo box */}
                    {product.exclusiveRegion === "US" && (
                        <div className="border border-[#f0c882] rounded-lg overflow-hidden bg-[#fff8ed] mb-4">
                            <div className="bg-red-600 px-3 py-1.5 flex items-center gap-2">
                                <Image src="/images/usa.e8bde4e6.png" alt="USA" width={54} height={32} className="object-contain shrink-0" />
                                <span className="text-white text-[13px] font-medium">Exclusive offers in the US</span>
                            </div>
                            <div className="px-4 py-2.5 flex items-baseline gap-3">
                                <span className="text-[13px] text-gray-500">Price:</span>
                                <span className="text-[26px] font-semibold text-[#e0781e]">${product.price.toFixed(2)}</span>
                                <span className="text-[14px] text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                            </div>
                        </div>
                    )}

                    {/* Price (non-exclusive) */}
                    {product.exclusiveRegion !== "US" && (
                        <div className="flex items-baseline gap-3 mb-5">
                            <span className="text-[26px] font-semibold text-[#e0781e]">${product.price.toFixed(2)}</span>
                            <span className="text-[14px] text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                            <span className="text-[11px] font-medium text-[#bf5e0a] bg-orange-50 border border-orange-200 px-1.5 py-0.5 rounded">
                                -{product.discount}%
                            </span>
                        </div>
                    )}

                    {/* Bulk */}
                    {
                        !product.bulkPricing && (
                            <div className="border border-gray-200 rounded-lg px-4 py-3 mb-4 text-[13px]">
                                <p className="text-gray-400 text-[12px] mb-1 text-base font-bold">Bulk Price</p>
                                <p className="line-through text-gray-600">${product.originalPrice.toFixed(2)}</p>
                                <p className="text-gray-400 text-[12px]">1+ Pieces</p>
                            </div>
                        )

                    }

                    {product.bulkPricing && product.bulkPricing.length > 0 && (
                        <div className="border border-gray-200 rounded-lg px-4 py-3 mb-4 text-[13px]">
                            <p className="text-[12px] text-gray-500 font-medium mb-2">Bulk Price:</p>
                            <div className="flex gap-6">
                                {product.bulkPricing.map((tier, i) => (
                                    <div key={i}>
                                        <div className="flex items-baseline gap-1.5">
                                            <span className="font-medium text-gray-800">${tier.price.toFixed(2)}</span>
                                            <span className="text-gray-400 line-through text-[12px]">
                                                ${product.originalPrice.toFixed(2)}
                                            </span>
                                        </div>
                                        <p className="text-gray-400 text-[12px] mt-0.5">
                                            {tier.maxQty ? `${tier.minQty}-${tier.maxQty}` : `${tier.minQty}+`} Pieces
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Shipping */}
                    {product.shipping && (
                        <div className="text-[13px] text-gray-500 mb-5 flex gap-10 items-start text-base font-bold">
                            <span>Shipping:</span>
                            <div>
                                <span>{product.shipping.price}</span>
                                <div className="text-[#e0781e] underline cursor-pointer">{product.shipping.description}</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Tabs */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="flex border-b border-gray-200">
                    {TABS.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-5 py-3 text-[14px] border-b-2 transition-colors ${activeTab === tab
                                ? "text-[#e0781e] border-[#e0781e]"
                                : "text-gray-500 border-transparent hover:text-gray-700"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="p-6 text-[13px] leading-relaxed text-gray-700">
                    {activeTab === "Description" && (
                        <ul className="space-y-2">
                            {product.description?.map((line, i) => (
                                <li key={i} className="pb-2 border-b border-gray-100 last:border-0">{line}</li>
                            ))}
                            <li className="font-medium pt-2">
                                All pictures are for reference only. Slight differences between finished products and
                                renderings in size, pattern position, color shade and other aspects due to production
                                factors are normal and acceptable.
                            </li>
                        </ul>
                    )}

                    {activeTab === "Size Guide" && (
                        <>
                            <table className="border-collapse text-[13px]">
                                <tbody>
                                    {product.sizes?.map((s) => (
                                        <tr key={s.label}>
                                            <td className="border border-gray-200 px-4 py-2 text-gray-500 w-28">Size</td>
                                            <td className="border border-gray-200 px-4 py-2">{s.label}</td>
                                        </tr>
                                    ))}
                                    {product.sizes?.[activeSize]?.long && (
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-2 text-gray-500">Long</td>
                                            <td className="border border-gray-200 px-4 py-2">{product.sizes[activeSize].long}</td>
                                        </tr>
                                    )}
                                    {product.sizes?.[activeSize]?.width && (
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-2 text-gray-500">Width</td>
                                            <td className="border border-gray-200 px-4 py-2">{product.sizes[activeSize].width}</td>
                                        </tr>
                                    )}
                                    {product.sizes?.[activeSize]?.height && (
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-2 text-gray-500">Height</td>
                                            <td className="border border-gray-200 px-4 py-2">{product.sizes[activeSize].height}</td>
                                        </tr>
                                    )}
                                    {product.sizes?.[activeSize]?.capacity && (
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-2 text-gray-500">Capacity</td>
                                            <td className="border border-gray-200 px-4 py-2">{product.sizes[activeSize].capacity}</td>
                                        </tr>
                                    )}
                                    {product.sizes?.[activeSize]?.diameter && (
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-2 text-gray-500">Diameter</td>
                                            <td className="border border-gray-200 px-4 py-2">{product.sizes[activeSize].diameter}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <p className="text-[12px] text-gray-400 mt-3">
                                This size guide shows product measurements taken when products are laid flat.
                                Actual product measurements may vary by up to 1.
                            </p>
                        </>
                    )}

                    {/* {activeTab === "Shipping" && (
            <p className="text-gray-400">{product.shippingNote ?? "Shipping information coming soon."}</p>
          )}

          {activeTab === "Print Guide" && (
            <ul className="space-y-2">
              {product.printGuide?.map((line, i) => (
                <li key={i} className="pb-2 border-b border-gray-100 last:border-0">{line}</li>
              )) ?? <p className="text-gray-400">Print guide coming soon.</p>}
            </ul>
          )} */}
                </div>
            </div>
        </div>
    );
}