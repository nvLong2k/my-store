"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { use, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

export default function ProductDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = use(params);

    const product = products.find((p) => String(p.id) === id);

    if (!product) notFound();

    const [activeTab, setActiveTab] = useState<Tab>("Description");
    const [activeThumb, setActiveThumb] = useState(0);
    const [activeColor, setActiveColor] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    const discountPercent = useMemo(() => {
        return (
            ((product.originalPrice - (product.price - 1)) /
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
                                        className={`
                      relative overflow-hidden rounded-xl border transition-all duration-300 shrink-0
                      ${activeThumb === i
                                                ? "border-[#e0781e] scale-105 shadow-md"
                                                : "border-gray-200 opacity-70 hover:opacity-100"}
                    `}
                                    >
                                        <Image
                                            src={img}
                                            alt=""
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
                            className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight"
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
                        <div className="mt-6 flex items-end gap-3 flex-wrap">
                            <span className="text-4xl font-bold text-[#e0781e]">
                                ${(product.price - 1).toFixed(2)}
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
                            <div className="mt-6">
                                <p className="text-sm font-medium mb-3 text-gray-800">
                                    Color
                                </p>

                                <div className="flex gap-3 flex-wrap">
                                    {product.colors.map((c, i) => (
                                        <button
                                            key={i}
                                            title={c.label}
                                            onClick={() => setActiveColor(i)}
                                            style={{ background: c.hex }}
                                            className={`
                        w-9 h-9 rounded-full border-4 transition-all duration-200
                        ${activeColor === i
                                                    ? "border-white ring-2 ring-gray-900 scale-110"
                                                    : "border-white ring-1 ring-gray-300"}
                      `}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Sizes */}
                        {product.sizes && (
                            <div className="mt-6">
                                <div className="flex items-center justify-between mb-3">
                                    <p className="text-sm font-medium text-gray-800">
                                        Size
                                    </p>

                                    <button
                                        onClick={() => setActiveTab("Size Guide")}
                                        className="text-sm text-[#e0781e] hover:underline"
                                    >
                                        Size Guide
                                    </button>
                                </div>

                                <div className="flex gap-2 flex-wrap">
                                    {product.sizes.map((s, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActiveSize(i)}
                                            className={`
                        min-w-13 px-4 py-2 rounded-xl text-sm border transition-all duration-200
                        ${activeSize === i
                                                    ? "bg-gray-900 text-white border-gray-900"
                                                    : "bg-white border-gray-300 hover:border-gray-900"}
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
                            <div className="grid grid-cols-3 gap-3 mt-7">
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

                        {/* CTA */}
                        {/* <div className="mt-8 flex gap-3">
                            <button className="flex-1 h-12 rounded-2xl bg-gray-900 text-white font-medium hover:opacity-90 transition">
                                Add to Cart
                            </button>

                            <button className="h-12 px-5 rounded-2xl border border-gray-300 bg-white hover:bg-gray-50 transition">
                                ♡
                            </button>
                        </div> */}
                    </div>
                </div>

                {/* TABS */}
                <div className="mt-12 bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">

                    {/* Tab Header */}
                    <div className="flex border-b border-gray-200 overflow-x-auto">
                        {TABS.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`
                  relative px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors
                  ${activeTab === tab
                                        ? "text-[#e0781e]"
                                        : "text-gray-500 hover:text-gray-800"}
                `}
                            >
                                {tab}

                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="active-tab"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#e0781e]"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="p-5 md:p-7">

                        <AnimatePresence mode="wait">

                            {/* DESCRIPTION */}
                            {activeTab === "Description" && (
                                <motion.div
                                    key="desc"
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <ul className="space-y-4">
                                        {product.description?.map((line, i) => (
                                            <li
                                                key={i}
                                                className="pb-4 border-b border-gray-100 last:border-0 text-gray-700 leading-relaxed"
                                            >
                                                {line}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}

                            {/* SIZE GUIDE */}
                            {activeTab === "Size Guide" && product.sizes && (
                                <motion.div
                                    key="size"
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div className="overflow-x-auto rounded-2xl border border-gray-200">
                                        <table className="min-w-full text-sm">
                                            <tbody>

                                                <tr className="bg-gray-50">
                                                    <td className="sticky left-0 z-10 bg-gray-50 border-b border-r border-gray-200 px-4 py-3 font-medium">
                                                        Size
                                                    </td>

                                                    {product.sizes.map((s) => (
                                                        <td
                                                            key={s.label}
                                                            className="border-b border-gray-200 px-4 py-3 font-medium whitespace-nowrap"
                                                        >
                                                            {s.label}
                                                        </td>
                                                    ))}
                                                </tr>

                                                {Array.from(
                                                    new Set(
                                                        product.sizes.flatMap((s) =>
                                                            Object.keys(s).filter(
                                                                (k) => k !== "label"
                                                            )
                                                        )
                                                    )
                                                ).map((field) => (
                                                    <tr key={field}>
                                                        <td className="sticky left-0 z-10 bg-white border-r border-b border-gray-200 px-4 py-3 text-gray-500 whitespace-nowrap">
                                                            {SIZE_FIELD_LABELS[field] ??
                                                                field
                                                                    .replace(/([A-Z])/g, " $1")
                                                                    .replace(/^./, (c) =>
                                                                        c.toUpperCase()
                                                                    )}
                                                        </td>

                                                        {product.sizes!.map((s) => (
                                                            <td
                                                                key={s.label}
                                                                className="border-b border-gray-200 px-4 py-3 whitespace-nowrap"
                                                            >
                                                                {s[field] ?? "—"}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <p className="text-xs text-gray-400 mt-4">
                                        Actual product measurements may vary by up to 1 inch.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}