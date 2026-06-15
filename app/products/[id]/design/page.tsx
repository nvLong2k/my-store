// app/products/[id]/design/page.tsx
"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { ReactNode, use, useState } from "react";
import { products } from "@/src/mock/products";
import { ChevronLeft, ChevronRight, Eraser, ImageIcon, Layers, Palette, Redo2, ShoppingBag, Type, Undo2 } from "lucide-react";

type Tool = "select" | "upload" | "text" | "background" | "layer";

const TOOLS: { id: Tool; icon: ReactNode; label: string; }[] = [
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
    const [activeColor, setActiveColor] = useState<number>(0);
    const [activeSize, setActiveSize] = useState<number>(0);
    const [activeThumb, setActiveThumb] = useState<number>(0);

    return (
        <div className="flex flex-1 min-h-0 bg-gray-100 overflow-hidden h-full">
            {/* Left Sidebar */}
            <aside className="flex h-[calc(100vh-66px)]">
                {/* Icon rail */}
                <div className="w-20 bg-white border-r border-gray-200 flex flex-col items-center">
                    {TOOLS.map((tool) => (
                        <button
                            key={tool.id}
                            onClick={() => setActiveTool(tool.id)}
                            className={`w-20 h-20 flex flex-col items-center justify-center gap-0.75 text-xs transition-colors hover:cursor-pointer ${activeTool === tool.id
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
                <div className="h-12 bg-white border-b border-gray-200 flex items-center justify-center px-4 shrink-0">
                    {/* Left tools */}
                    <div className="flex items-center gap-2">
                        {[
                            { icon: <Image src='/images/icon/full-screen.png' alt="full screen" width={16} height={16} />, label: "Fullscreen" },
                            { icon: <Image src='/images/icon/shortcut-key.png' alt="full screen" width={14} height={14} />, label: "Shortcut Key" },
                            { icon: <Image src='/images/icon/design-record.png' alt="full screen" width={18} height={18} />, label: "Design Record" },
                            { icon: <Image src='/images/icon/info.png' alt="full screen" width={18} height={18} />, label: "" },
                        ].map((t) => (
                            <button
                                key={t.label}
                                title={t.label}
                                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 text-sm hover:cursor-pointer"
                            >
                                {t.icon}
                            </button>
                        ))}
                        <div className="w-0.5 h-5 bg-gray-300 mx-1" />
                        {[
                            { icon: <Undo2 size={24} />, label: "Revoke" },
                            { icon: <Redo2 size={24} />, label: "Recovery" },
                            { icon: <Eraser size={24} />, label: "Clear" },
                        ].map((t) => (
                            <button
                                key={t.label}
                                title={t.label}
                                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 text-sm hover:cursor-pointer"
                            >
                                {t.icon}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Recommended pixels */}
                <div className="text-end text-gray-400 text-sm mt-1 mr-2">
                    Recommended Pixels: 2165 * 2666
                </div>

                {/* Canvas area */}
                <div className="flex-1 overflow-auto flex flex-col items-center justify-start pb-8 px-4">
                    {/* Thumbnails + Canvas */}
                    <div className="flex gap-3 items-start">
                        {/* Face thumbnails */}
                        <div className="flex flex-col gap-2">
                            <button className="text-sm shadow-md bg-white text-gray-500 border border-gray-200 rounded-md px-2 py-1 hover:bg-gray-50 whitespace-nowrap hover:cursor-pointer">
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
                        <div className="flex flex-col items-center" style={{ width: 700, height: 700 }}>
                            {/* Warning */}
                            <p className="text-sm text-red-500 text-center mb-3 font-medium">
                                In order to comply with the production specifications, please ensure that the design elements are always within the red line!
                            </p>

                            <div className="relative rounded-sm overflow-hidden shadow-lg w-full h-full">
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        backgroundImage: `repeating-conic-gradient(#a8a8a8 0% 25%, #f0f0f0 0% 50%)`,
                                        backgroundSize: "20px 20px",
                                    }}
                                />

                                <div
                                    className="absolute inset-10"
                                    style={{
                                        backgroundImage: `repeating-conic-gradient(#e0e0e0 0% 25%, #ffffff 0% 50%)`,
                                        backgroundSize: "20px 20px",
                                    }}
                                />

                                <div className="absolute inset-10 border-[3px] border-red-500 pointer-events-none" />

                                <div
                                    className="absolute top-10 bottom-10 left-1/2 border-l-2 border-dashed border-blue-600 pointer-events-none"
                                    style={{ transform: 'translateX(-1px)' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Panel */}
            <aside className="w-72 bg-white border-l border-gray-200 flex flex-col">
                <div className="m-2 border border-gray-200 rounded-md overflow-hidden">
                    {/* Preview image */}
                    <div className="relative pt-4 flex justify-center">
                        <div className="relative w-48 h-48">
                            <Image
                                src={product.images[0]}
                                alt={product.name}
                                fill
                                className="object-contain"
                            />
                        </div>

                        <button className="absolute left-2 top-2/3 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
                            <ChevronLeft size={20} />
                        </button>

                        <button className="absolute right-2 top-2/3 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    {/* Preview header */}
                    <div className="h-12 flex items-center justify-center">
                        <div className="flex gap-1.5">
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                <div
                                    key={i}
                                    className={`w-2 h-2 rounded-full ${i === 0 ? "bg-blue-500" : "bg-gray-300"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Properties panel */}
                <div className="p-4 border-t border-gray-100">
                    <p className="text-sm text-gray-400 text-center">
                        Please select an element to edit
                    </p>
                </div>
            </aside>
        </div>
    );
}