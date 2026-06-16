"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { use, useMemo } from "react";
import { motion } from "framer-motion";

import { products } from "@/src/mock/products";
import ProductInfoTabs from "@/src/components/ProductInfoTabs";
import ImageGallery from "@/src/components/ImageGallery";
import ColorPicker from "@/src/components/ColorPicker";
import SizePicker from "@/src/components/SizePicker";
import MetaGrid from "@/src/components/MetaGrid";
import BulkPricing from "@/src/components/BulkPricing";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const product = products.find((p) => String(p.id) === id);

    if (!product) notFound();

    const discountPercent = useMemo(
        () =>
            (
                ((product.originalPrice - product.price) /
                    product.originalPrice) *
                100
            ).toFixed(0),
        [product]
    );

    return (
        <div className="bg-[#fafafa] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10">
                <div className="grid lg:grid-cols-2 gap-10 items-start">

                    {/* Left — Image gallery */}
                    <ImageGallery
                        images={product.images}
                        name={product.name}
                        discountPercent={discountPercent}
                    />

                    {/* Right — Product info */}
                    <div className="lg:sticky lg:top-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-base md:text-xl font-semibold text-gray-900 leading-tight"
                        >
                            {product.name}
                        </motion.h1>

                        <div className="flex items-center gap-2 mt-3 text-sm">
                            <div className="flex text-yellow-400">★★★★★</div>
                            <span className="text-gray-500">4.9 (128 reviews)</span>
                        </div>

                        <div className="mt-3 flex items-end gap-3 flex-wrap">
                            <span className="text-4xl font-bold text-[#e0781e]">
                                ${product.price.toFixed(2)}
                            </span>
                            <span className="text-lg text-gray-400 line-through">
                                ${product.originalPrice.toFixed(2)}
                            </span>
                            <span className="bg-orange-100 text-orange-700 border border-orange-200 text-xs font-semibold px-2 py-1 rounded-full">
                                Save {discountPercent}%
                            </span>
                        </div>

                        {product.shipping && (
                            <div className="mt-5 bg-white border border-gray-200 rounded-2xl p-4">
                                <div className="flex items-start gap-3">
                                    <span className="text-xl">🚚</span>
                                    <div>
                                        <p className="font-medium text-gray-900">Shipping</p>
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

                        {product.colors && product.colors.length > 0 && (
                            <ColorPicker colors={product.colors} />
                        )}

                        {product.sizes && <SizePicker sizes={product.sizes} />}

                        <MetaGrid product={product} />

                        <BulkPricing product={product} />

                        <div className="mt-4">
                            <Link
                                href={`/products/${product.id}/design`}
                                className="w-40 h-12 flex items-center justify-center rounded-md bg-[#ffa200] text-white font-medium hover:opacity-90 transition hover:cursor-pointer"
                            >
                                Start Designing
                            </Link>
                        </div>
                    </div>
                </div>

                <ProductInfoTabs product={product} />
            </div>
        </div>
    );
}