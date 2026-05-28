// app/products/[id]/page.tsx
"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { use, useState } from "react";

import { products } from "@/src/mock/products";

const SIZE_FIELD_LABELS: Record<string, string> = {
    capGirth: "Cap girth",
    brimOfHat: "Brim of hat",
    hatHeight: "Hat height",
    width: "Width",
    height: "Height",
    long: "Long",
    capacity: "Capacity",
    diameter: "Diameter",
    shoulderWidth: "Shoulder width",
    length: "Length",
    sleeveLength: "Sleeve length",
    bust: "Bust 1 / 2",
    recommendedHeight: "Recommended height",
    recommendedWeight: "Recommended weight",
    waist: "Waist 1 / 2",
    headCircumference: "Head circumference",
};

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
        <div className="max-w-5xl mx-auto px-4 py-6 md:py-10">
            {/* Top */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-8 md:mb-10">
                {/* Images */}
                <div>
                    <div className="relative aspect-square bg-[#f5f4f0] rounded-xl overflow-hidden border border-gray-200">
                        <Image
                            src={product.images[activeThumb]}
                            alt={product.name}
                            width={498}
                            height={498}
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
                    <h1 className="text-base md:text-lg font-medium leading-snug mb-4">{product.name}</h1>

                    {/* Colors */}
                    {product.colors && product.colors.length > 0 && (
                        <div className="mb-4">
                            <p className="text-[13px] text-gray-500 mb-2">Color:</p>
                            <div className="flex gap-2 flex-wrap">
                                {product.colors.map((c, i) => (
                                    <button
                                        key={i}
                                        title={c.label}
                                        onClick={() => setActiveColor(i)}
                                        style={{ background: c.hex }}
                                        className={`w-7 h-7 rounded-full border transition-colors shrink-0 ${activeColor === i ? "border-gray-800" : "border-gray-200"
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
                        <div className="grid grid-cols-1 sm:grid-cols-3 border border-gray-200 rounded-lg overflow-hidden mb-5 text-[13px]">
                            {[
                                { label: "Material", value: product.meta.material },
                                { label: "Weight", value: product.meta.weight },
                                { label: "Avg. production time", value: `${product.avgProductionDays} days` },
                            ].map((m, i) => (
                                <div
                                    key={i}
                                    className={`p-3 ${i < 2 ? "border-b sm:border-b-0 sm:border-r border-gray-200" : ""
                                        }`}
                                >
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
                                <Image
                                    src="/images/usa.e8bde4e6.png"
                                    alt="USA"
                                    width={54}
                                    height={32}
                                    className="object-contain shrink-0"
                                />
                                <span className="text-white text-[13px] font-medium">Exclusive offers in the US</span>
                            </div>
                            <div className="px-4 py-2.5 flex items-baseline gap-3 flex-wrap">
                                <span className="text-[13px] text-gray-500">Price:</span>
                                <span className="text-[24px] md:text-[26px] font-semibold text-[#e0781e]">
                                    ${(product.price - 1).toFixed(2)}
                                </span>
                                <span className="text-[14px] text-gray-400 line-through">
                                    ${product.originalPrice.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    )}

                    {/* Price (non-exclusive) */}
                    {product.exclusiveRegion !== "US" && (
                        <div className="flex items-baseline gap-3 mb-5 flex-wrap">
                            <span className="text-[24px] md:text-[26px] font-semibold text-[#e0781e]">
                                ${(product.price - 1).toFixed(2)}
                            </span>

                            <span className="text-[14px] text-gray-400 line-through">
                                ${product.originalPrice.toFixed(2)}
                            </span>

                            <span className="text-[11px] font-medium text-[#bf5e0a] bg-orange-50 border border-orange-200 px-1.5 py-0.5 rounded">
                                -
                                {(
                                    ((product.originalPrice - (product.price - 1)) /
                                        product.originalPrice) *
                                    100
                                ).toFixed(0)}
                                %
                            </span>
                        </div>
                    )}

                    {/* Bulk — no tiers */}
                    {!product.bulkPricing && (
                        <div className="border border-gray-200 rounded-lg px-4 py-3 mb-4 text-[13px]">
                            <p className="text-[12px] text-gray-500 font-medium mb-1">Bulk Price</p>
                            <p className="line-through text-gray-600">${product.originalPrice.toFixed(2)}</p>
                            <p className="text-gray-400 text-[12px]">1+ Pieces</p>
                        </div>
                    )}

                    {/* Bulk — with tiers */}
                    {product.bulkPricing && product.bulkPricing.length > 0 && (
                        <div className="border border-gray-200 rounded-lg px-4 py-3 mb-4 text-[13px]">
                            <p className="text-[12px] text-gray-500 font-medium mb-2">Bulk Price:</p>
                            <div className="flex gap-4 flex-wrap">
                                {product.bulkPricing.map((tier, i) => (
                                    <div key={i}>
                                        <div className="flex items-baseline gap-1.5">
                                            {
                                                tier?.price && (
                                                    <span className="font-medium text-gray-800">${(tier.price - 1).toFixed(2)}</span>
                                                )
                                            }
                                            <span className="text-gray-400 line-through text-[12px]">
                                                ${tier?.realPrice?.toFixed(2)}
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
                        <div className="text-[13px] text-gray-500 mb-5 flex flex-col sm:flex-row gap-1 sm:gap-10 items-start">
                            <span className="font-medium text-gray-700 shrink-0">Shipping:</span>
                            <div>
                                <span>{product.shipping.price}</span>
                                <div className="text-[#e0781e] underline cursor-pointer">
                                    {product.shipping.description}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Tabs */}
            <div className="border border-gray-200 rounded-xl">
                <div className="flex border-b border-gray-200 overflow-x-auto">
                    {TABS.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-5 py-3 text-[14px] border-b-2 transition-colors whitespace-nowrap ${activeTab === tab
                                ? "text-[#e0781e] border-[#e0781e]"
                                : "text-gray-500 border-transparent hover:text-gray-700"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="p-4 md:p-6 text-[13px] leading-relaxed text-gray-700">
                    {activeTab === "Description" && (
                        <ul className="space-y-2">
                            {product.description?.map((line, i) => (
                                <li key={i} className="pb-2 border-b border-gray-100 last:border-0">
                                    {line}
                                </li>
                            ))}
                        </ul>
                    )}

                    {activeTab === "Size Guide" && product.sizes && (
                        <>
                            <div className="overflow-x-auto">
                                <table className="border-collapse text-[13px] min-w-max">
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-200 px-3 py-2 text-gray-500 whitespace-nowrap sticky left-0 bg-white z-10">
                                                Size
                                            </td>
                                            {product.sizes.map((s) => (
                                                <td key={s.label} className="border border-gray-200 px-3 py-2 whitespace-nowrap">
                                                    {s.label}
                                                </td>
                                            ))}
                                        </tr>

                                        {Array.from(
                                            new Set(product.sizes.flatMap((s) => Object.keys(s).filter((k) => k !== "label")))
                                        ).map((field) => (
                                            <tr key={field}>
                                                <td className="border border-gray-200 px-3 py-2 text-gray-500 whitespace-nowrap sticky left-0 bg-white z-10">
                                                    {SIZE_FIELD_LABELS[field] ??
                                                        field.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase())}
                                                </td>
                                                {product.sizes!.map((s) => (
                                                    <td key={s.label} className="border border-gray-200 px-3 py-2 whitespace-nowrap">
                                                        {s[field] ?? "—"}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-[12px] text-gray-400 mt-3">
                                This size guide shows product measurements taken when products are laid flat.
                                Actual product measurements may vary by up to 1.
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}