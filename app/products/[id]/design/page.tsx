// app/products/[id]/design/page.tsx
"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { ReactNode, use, useState } from "react";
import { products } from "@/src/mock/products";
import { ChevronLeft, ImageIcon, Layers, Palette, ShoppingBag, Type } from "lucide-react";

type Tool = "select" | "upload" | "text" | "background" | "layer";

const TOOLS: {
    id: Tool;
    icon: ReactNode;
    label: string;
}[] = [
        { id: "upload", icon: <ShoppingBag size={20} />, label: "Product" },
        { id: "select", icon: <ImageIcon size={20} />, label: "Gallery" },
        { id: "text", icon: <Type size={20} />, label: "Text" },
        { id: "background", icon: <Palette size={20} />, label: "Background" },
        { id: "layer", icon: <Layers size={20} />, label: "Layer" },
    ];

export default function DesignPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const product = products.find((p) => String(p.id) === id);

    if (!product) notFound();

    const [activeTool, setActiveTool] = useState<Tool>("upload");
    const [activeColor, setActiveColor] = useState(0);
    const [activeSize, setActiveSize] = useState(0);
    const [activeThumb, setActiveThumb] = useState(0);

    return (
        <div className="flex h-screen bg-gray-100 overflow-hidden">
            {/* Left Sidebar */}
            <aside className="flex h-full">
                {/* Icon rail */}
                <div className="w-20 bg-white border-r border-gray-200 flex flex-col items-center">
                    {TOOLS.map((tool) => (
                        <button
                            key={tool.id}
                            onClick={() => setActiveTool(tool.id)}
                            className={`w-20 h-20 flex flex-col items-center justify-center gap-0.75 text-xs transition-colors ${activeTool === tool.id
                                ? "bg-blue-100 text-[#3699ff] border-l-4 border-[#3699ff]"
                                : "text-gray-500 hover:bg-gray-100"
                                }`}
                        >
                            <span className="text-base leading-none">{tool.icon}</span>
                            <span className="text-xs">{tool.label}</span>
                        </button>
                    ))}
                </div>

                {/* Panel */}
                <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
                    {/* Product header */}
                    <div className="p-3 border-b border-gray-100">
                        <a href={`/products/${product.id}`} className="flex items-center gap-1.5 text-sm text-blue-500 hover:underline mb-3">
                            <ChevronLeft size={20} />
                            Return to view all products
                        </a>

                        <div className="flex gap-3">
                            <div className="w-30 h-30 rounded-md overflow-hidden bg-gray-100 shrink-0 relative border border-gray-200">
                                <Image
                                    src={product.images[activeThumb]}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="min-w-0">
                                <p className="text-base text-gray-800 font-medium line-clamp-1 leading-snug">
                                    {product.name.length > 40
                                        ? product.name.slice(0, 40) + "..."
                                        : product.name}
                                </p>
                                <p className="text-xs text-gray-400 mt-0.5">
                                    (Product Code: {product.id.toString().padStart(6, "0")})
                                </p>
                                <div className="flex items-center gap-1.5 mt-1">
                                    <span className="text-base font-semibold text-orange-500">
                                        ${(product.price - 1).toFixed(2)}
                                    </span>
                                    <span className="text-xs text-gray-400 line-through">
                                        ${product.originalPrice.toFixed(2)}
                                    </span>
                                </div>
                                <span className="text-xs bg-orange-100 text-orange-600 px-1 py-0.5 rounded">
                                    -{product.discount}%
                                </span>
                                <br />
                                <a href={`/products/${product.id}`} className="text-sm text-blue-500 hover:underline">
                                    View details&gt;
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Product size */}
                    {product.sizes && product.sizes.length > 0 && (
                        <div className="p-3 border-b border-gray-100">
                            <p className="text-[12px] font-semibold text-gray-700 mb-2">Product size</p>
                            <div className="flex flex-wrap gap-1.5">
                                {product.sizes.map((s, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveSize(i)}
                                        className={`px-3 py-1.5 rounded-md text-[12px] border transition-colors ${activeSize === i
                                            ? "border-blue-400 text-blue-600 bg-blue-50"
                                            : "border-gray-200 text-gray-600 hover:border-gray-300"
                                            }`}
                                    >
                                        {s.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Product color */}
                    {product.colors && product.colors.length > 0 && (
                        <div className="p-3">
                            <p className="text-[12px] font-semibold text-gray-700 mb-2">Product color</p>
                            <div className="flex gap-2 flex-wrap">
                                {product.colors.map((c, i) => (
                                    <button
                                        key={i}
                                        title={c.label}
                                        onClick={() => setActiveColor(i)}
                                        style={{ background: c.hex }}
                                        className={`w-8 h-8 rounded-full border-2 transition-colors ${activeColor === i ? "border-gray-800" : "border-gray-200"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </aside>

            {/* Center Canvas */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Top toolbar */}
                <div className="h-12 bg-white border-b border-gray-200 flex items-center justify-between px-4 shrink-0">
                    {/* Left tools */}
                    <div className="flex items-center gap-1">
                        {[
                            { icon: "⛶", label: "Fullscreen" },
                            { icon: "↖", label: "Select" },
                            { icon: "📋", label: "Copy" },
                            { icon: "ℹ", label: "Info" },
                        ].map((t) => (
                            <button
                                key={t.label}
                                title={t.label}
                                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 text-sm"
                            >
                                {t.icon}
                            </button>
                        ))}
                        <div className="w-px h-5 bg-gray-200 mx-1" />
                        {[
                            { icon: "↩", label: "Undo" },
                            { icon: "↪", label: "Redo" },
                            { icon: "✏️", label: "Edit" },
                        ].map((t) => (
                            <button
                                key={t.label}
                                title={t.label}
                                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 text-sm"
                            >
                                {t.icon}
                            </button>
                        ))}
                    </div>

                    {/* Recommended pixels */}
                    <span className="text-[12px] text-gray-400">
                        Recommended Pixels: 2165 * 2666
                    </span>
                </div>

                {/* Canvas area */}
                <div className="flex-1 overflow-auto flex flex-col items-center justify-start pt-4 pb-8 px-4">
                    {/* Warning */}
                    <p className="text-sm text-red-500 text-center mb-3 font-medium">
                        In order to comply with the production specifications, please ensure that the design elements are always within the red line!
                    </p>

                    {/* Thumbnails + Canvas */}
                    <div className="flex gap-3 items-start">
                        {/* Face thumbnails */}
                        <div className="flex flex-col gap-2">
                            <button className="text-sm shadow-md bg-white text-gray-500 border border-gray-200 rounded-md px-2 py-1 hover:bg-gray-50 whitespace-nowrap">
                                Copy face
                            </button>
                            {product.images.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveThumb(i)}
                                    className={`w-20 h-20 shadow-md rounded-md overflow-hidden border transition-colors relative ${activeThumb === i ? "border-blue-500" : "border-gray-200"
                                        }`}
                                >
                                    <Image src={img} alt="" fill className="object-cover" />
                                </button>
                            ))}
                        </div>

                        {/* Main canvas */}
                        <div className="relative rounded-sm overflow-hidden" style={{ width: 560, height: 560 }}>
                            {/* Checkerboard toàn bộ canvas */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: "repeating-conic-gradient(#b0b0b0 0% 25%, #fff 0% 50%)",
                                    backgroundSize: "20px 20px",
                                }}
                            />

                            {/* Vùng trong viền đỏ — trắng hơn để phân biệt */}
                            <div
                                className="absolute inset-10"
                                style={{
                                    backgroundImage: "repeating-conic-gradient(#d8d8d8 0% 25%, #fff 0% 50%)",
                                    backgroundSize: "20px 20px",
                                }}
                            />

                            {/* Red boundary */}
                            <div className="absolute inset-10 border-2 border-red-500 pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Panel */}
            <aside className="w-72 bg-white border-l border-gray-200 flex flex-col">
                {/* Preview header */}
                <div className="h-12 border-b border-gray-100 flex items-center justify-between px-4 shrink-0">
                    <button className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50 text-sm">
                        ‹
                    </button>
                    <div className="flex gap-1.5">
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div
                                key={i}
                                className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-blue-500" : "bg-gray-300"}`}
                            />
                        ))}
                    </div>
                    <button className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50 text-sm">
                        ›
                    </button>
                </div>

                {/* Preview image */}
                <div className="flex-1 flex items-center justify-center p-4 bg-gray-50">
                    <div className="relative w-48 h-48">
                        <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Properties panel */}
                <div className="p-4 border-t border-gray-100">
                    <p className="text-[12px] text-gray-400 text-center">
                        Please select an element to edit
                    </p>
                </div>

                {/* CTA */}
                <div className="p-4 border-t border-gray-100 space-y-2">
                    <button className="w-full bg-[#e0781e] hover:bg-[#c96a15] text-white rounded-lg py-2.5 text-[13px] font-medium transition-colors">
                        Add to Cart
                    </button>
                    <button className="w-full border border-gray-200 text-gray-600 rounded-lg py-2.5 text-[13px] hover:bg-gray-50 transition-colors">
                        Save Design
                    </button>
                </div>
            </aside>
        </div>
    );
}