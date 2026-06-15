"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { products } from "@/src/mock/products";
import ProductInfoTabs from "@/src/components/ProductInfoTabs";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }>; }) {
    const { id } = use(params);

    const product = products.find((p) => String(p.id) === id);

    if (!product) notFound();

    const [activeThumb, setActiveThumb] = useState<number>(0);
    const [activeColor, setActiveColor] = useState<number>(0);
    const [activeSize, setActiveSize] = useState<number>(0);

    const discountPercent = useMemo(() => {
        return (
            ((product.originalPrice - (product.price)) /
                product.originalPrice) *
            100
        ).toFixed(0);
    }, [product]);

    return (
        <div className="bg-[#fafafa] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10">

                {/* TOP */}
                <div className="grid lg:grid-cols-2 gap-10 items-start">

                    {/* LEFT */}
                    <div>

                        {/* Main Image */}
                        <motion.div
                            layout
                            className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeThumb}
                                    initial={{ opacity: 0, scale: 1.03 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <Image
                                        src={product.images[activeThumb]}
                                        alt={product.name}
                                        width={900}
                                        height={900}
                                        priority
                                        className="w-full aspect-square object-cover"
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Discount badge */}
                            <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                                -{discountPercent}%
                            </div>
                        </motion.div>

                        {/* Thumbnails */}
                        {product.images.length > 1 && (
                            <div className="flex gap-3 mt-4 overflow-x-auto pb-1">
                                {product.images.map((img, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveThumb(i)}
                                        className={`relative overflow-hidden rounded-xl border transition-all duration-300 shrink-0
                                            ${activeThumb === i ? "border-[#e0781e] scale-105 shadow-md" : "border-gray-200 opacity-70 hover:opacity-100"}
                                        `}
                                    >
                                        <Image
                                            src={img}
                                            alt={product.name}
                                            width={72}
                                            height={72}
                                            className="w-18 h-18 object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* RIGHT */}
                    <div className="lg:sticky lg:top-6">

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-base md:text-xl font-semibold text-gray-900 leading-tight"
                        >
                            {product.name}
                        </motion.h1>

                        {/* Rating fake */}
                        <div className="flex items-center gap-2 mt-3 text-sm">
                            <div className="flex text-yellow-400">
                                ★★★★★
                            </div>
                            <span className="text-gray-500">
                                4.9 (128 reviews)
                            </span>
                        </div>

                        {/* Price */}
                        <div className="mt-3 flex items-end gap-3 flex-wrap">
                            <span className="text-4xl font-bold text-[#e0781e]">
                                ${(product.price).toFixed(2)}
                            </span>

                            <span className="text-lg text-gray-400 line-through">
                                ${product.originalPrice.toFixed(2)}
                            </span>

                            <span className="bg-orange-100 text-orange-700 border border-orange-200 text-xs font-semibold px-2 py-1 rounded-full">
                                Save {discountPercent}%
                            </span>
                        </div>

                        {/* Shipping */}
                        {product.shipping && (
                            <div className="mt-5 bg-white border border-gray-200 rounded-2xl p-4">
                                <div className="flex items-start gap-3">
                                    <div className="text-xl">🚚</div>

                                    <div>
                                        <p className="font-medium text-gray-900">
                                            Shipping
                                        </p>

                                        <p className="text-sm text-gray-500 mt-1">
                                            {product.shipping.price}
                                        </p>

                                        <p className="text-sm text-[#e0781e] underline mt-1 cursor-pointer">
                                            {product.shipping.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Colors */}
                        {product.colors && product.colors.length > 0 && (
                            <div className="mt-4">
                                <div className="flex items-center justify-between mb-3">
                                    <p className="text-base font-bold text-gray-800">
                                        Color
                                    </p>

                                    <span className="text-sm text-gray-500">
                                        {product.colors[activeColor]?.label}
                                    </span>
                                </div>

                                <div className="flex gap-4 flex-wrap">
                                    {product.colors.map((c, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActiveColor(i)}
                                            className="flex flex-col items-center gap-2"
                                        >
                                            <span
                                                className={`
                                        w-10 h-10 rounded-full border-4 transition-all
                                        ${activeColor === i
                                                        ? "border-white ring-2 ring-gray-900"
                                                        : "border-white ring-1 ring-gray-300"
                                                    }
                                        `}
                                                style={{ backgroundColor: c.hex }}
                                            />

                                            <span
                                                className={`text-xs ${activeColor === i
                                                    ? "font-semibold text-gray-900"
                                                    : "text-gray-500"
                                                    }`}
                                            >
                                                {c.label}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Sizes */}
                        {product.sizes && (
                            <div className="mt-4">
                                <div className="flex items-center justify-between mb-3">
                                    <p className="text-base font-bold text-gray-800">
                                        Size
                                    </p>
                                </div>

                                <div className="flex gap-2 flex-wrap">
                                    {product.sizes.map((s, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActiveSize(i)}
                                            className={`
                                                min-w-13 px-4 py-2 rounded-xl text-sm border transition-all duration-200
                                                ${activeSize === i ? "bg-gray-900 text-white border-gray-900" : "bg-white border-gray-300 hover:border-gray-900"}
                                            `}
                                        >
                                            {s.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Meta */}
                        {product.meta && (
                            <div className="grid grid-cols-3 gap-3 mt-4">
                                {[
                                    {
                                        label: "Material",
                                        value: product.meta.material,
                                    },
                                    {
                                        label: "Weight",
                                        value: product.meta.weight,
                                    },
                                    {
                                        label: "Production",
                                        value: `${product.avgProductionDays} days`,
                                    },
                                ].map((m, i) => (
                                    <div
                                        key={i}
                                        className="bg-white border border-gray-200 rounded-2xl p-4"
                                    >
                                        <p className="text-xs text-gray-400 mb-2">
                                            {m.label}
                                        </p>

                                        <p className="text-sm font-medium text-gray-800 leading-snug">
                                            {m.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Bulk — no tiers */}
                        {!product.bulkPricing && (
                            <div className="bg-white border border-gray-200 rounded-2xl p-4 mt-4">
                                <p className="text-[12px] text-gray-500 font-medium mb-1">Bulk Price</p>
                                <p className="line-through text-gray-600">${product.originalPrice.toFixed(2)}</p>
                                <p className="text-gray-400 text-[12px]">1+ Pieces</p>
                            </div>
                        )}

                        {/* Bulk — with tiers */}
                        {product.bulkPricing && product.bulkPricing.length > 0 && (
                            <div className="bg-white border border-gray-200 rounded-2xl p-4 mt-4">
                                <p className="text-[12px] text-gray-500 font-medium mb-2">Bulk Price:</p>
                                <div className="flex gap-4 flex-wrap">
                                    {product.bulkPricing.map((tier, i) => (
                                        <div key={i}>
                                            <div className="flex items-baseline gap-1.5">
                                                {
                                                    tier?.price && (
                                                        <span className="font-medium text-gray-800">${(tier.price).toFixed(2)}</span>
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

                        {/* CTA */}
                        <div className="mt-4">
                            <Link href={`/products/${product.id}/design`} className="w-40 h-12 flex items-center justify-center rounded-md bg-[#ffa200] text-white font-medium hover:opacity-90 transition hover:cursor-pointer">
                                Start Designing
                            </Link>
                        </div>
                    </div>
                </div>

                {/* TABS */}
                <ProductInfoTabs product={product} />
            </div>
        </div>
    );
}