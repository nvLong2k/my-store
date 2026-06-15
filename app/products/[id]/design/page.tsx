// app/products/[id]/design/page.tsx
"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { ReactNode, use, useEffect, useRef, useState } from "react";
import { products } from "@/src/mock/products";
import {
    ChevronLeft,
    ChevronRight,
    Eraser,
    ImageIcon,
    Layers,
    Palette,
    Redo2,
    ShoppingBag,
    Type,
    Undo2,
} from "lucide-react";
import * as fabric from "fabric";

type Tool = "select" | "upload" | "text" | "background" | "layer";

const TOOLS: { id: Tool; icon: ReactNode; label: string }[] = [
    { id: "upload", icon: <ShoppingBag size={20} />, label: "Product" },
    { id: "select", icon: <ImageIcon size={20} />, label: "Gallery" },
    { id: "text", icon: <Type size={20} />, label: "Text" },
    { id: "background", icon: <Palette size={20} />, label: "Background" },
    { id: "layer", icon: <Layers size={20} />, label: "Layer" },
];

const CANVAS_SIZE = 700;
const CLIP_IMAGE = "https://image.printdoors.com/admin/wdRFmM4BkG.png";

export default function DesignPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = use(params);
    const product = products.find((p) => String(p.id) === id);
    if (!product) notFound();

    const [activeTool, setActiveTool] = useState<Tool>("upload");
    const [activeColor, setActiveColor] = useState<number>(0);
    const [activeSize, setActiveSize] = useState<number>(0);
    const [activeThumb, setActiveThumb] = useState<number>(0);

    const canvasElRef = useRef<HTMLCanvasElement>(null);
    const fabricRef = useRef<fabric.Canvas | null>(null);

    useEffect(() => {
        if (!canvasElRef.current || fabricRef.current) return;

        const fc = new fabric.Canvas(canvasElRef.current, {
            width: CANVAS_SIZE,
            height: CANVAS_SIZE,
            backgroundColor: "transparent",
            preserveObjectStacking: true,
        });

        fabricRef.current = fc;

        return () => {
            fc.dispose();
            fabricRef.current = null;
        };
    }, []);

    const handleUndo = () => {
        const fc = fabricRef.current;
        if (!fc) return;
        const objs = fc.getObjects();
        if (objs.length > 0) {
            fc.remove(objs[objs.length - 1]);
            fc.renderAll();
        }
    };

    const handleClear = () => {
        fabricRef.current?.clear();
        fabricRef.current?.renderAll();
    };

    return (
        <div className="flex min-h-0 bg-gray-100 overflow-hidden h-[calc(100vh-66px)]">
            {/* ── Left Sidebar ── */}
            <aside className="flex h-full shrink-0">
                {/* Icon rail */}
                <div className="w-20 bg-white border-r border-gray-200 flex flex-col items-center">
                    {TOOLS.map((tool) => (
                        <button
                            key={tool.id}
                            onClick={() => setActiveTool(tool.id)}
                            className={`w-20 h-20 flex flex-col items-center justify-center gap-1 text-xs transition-colors cursor-pointer ${activeTool === tool.id
                                ? "bg-blue-50 text-[#3699ff] border-l-4 border-[#3699ff]"
                                : "text-gray-500 hover:bg-gray-100"
                                }`}
                        >
                            {tool.icon}
                            <span className="text-xs">{tool.label}</span>
                        </button>
                    ))}
                </div>

                {/* Panel */}
                <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
                    {/* Product header */}
                    <div className="p-3 border-b border-gray-100">
                        <a
                            href={`/products/${product.id}`}
                            className="flex items-center gap-1 text-sm text-blue-500 hover:underline mb-3"
                        >
                            <ChevronLeft size={16} />
                            Return to view all products
                        </a>

                        <div className="flex gap-3">
                            <div className="w-24 h-24 rounded-md overflow-hidden bg-gray-100 shrink-0 relative border border-gray-200">
                                <Image
                                    src={product.images[activeThumb]}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="min-w-0 flex flex-col gap-0.5">
                                <p className="text-sm text-gray-800 font-medium line-clamp-2 leading-snug">
                                    {product.name.length > 50
                                        ? product.name.slice(0, 50) + "..."
                                        : product.name}
                                </p>
                                <p className="text-xs text-gray-400">
                                    (Product Code:{" "}
                                    {product.id.toString().padStart(6, "0")})
                                </p>
                                <div className="flex items-center gap-1.5 flex-wrap">
                                    <span className="text-base font-semibold text-orange-500">
                                        ${(product.price - 1).toFixed(2)}
                                    </span>
                                    <span className="text-xs text-gray-400 line-through">
                                        ${product.originalPrice.toFixed(2)}
                                    </span>
                                    <span className="text-[10px] bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded">
                                        -{product.discount}%
                                    </span>
                                </div>
                                <a
                                    href={`/products/${product.id}`}
                                    className="text-xs text-blue-500 hover:underline"
                                >
                                    View details &rsaquo;
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Product size */}
                    {product.sizes && product.sizes.length > 0 && (
                        <div className="p-3 border-b border-gray-100">
                            <p className="text-xs font-semibold text-gray-700 mb-2">
                                Product size
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                {product.sizes.map((s, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveSize(i)}
                                        className={`px-3 py-1.5 rounded-md text-xs border transition-colors cursor-pointer ${activeSize === i
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
                        <div className="p-3 border-b border-gray-100">
                            <p className="text-xs font-semibold text-gray-700 mb-2">
                                Product color
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                {product.colors.map((c, i) => (
                                    <button
                                        key={i}
                                        title={c.label}
                                        onClick={() => setActiveColor(i)}
                                        style={{ background: c.hex }}
                                        className={`w-8 h-8 rounded-full border-2 transition-colors cursor-pointer ${activeColor === i
                                            ? "border-gray-800"
                                            : "border-gray-200"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </aside>

            {/* ── Center Canvas ── */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Top toolbar */}
                <div className="h-12 bg-white border-b border-gray-200 flex items-center justify-center px-4 shrink-0 gap-2">
                    {[
                        {
                            icon: (
                                <Image
                                    src="/images/icon/full-screen.png"
                                    alt="Fullscreen"
                                    width={16}
                                    height={16}
                                />
                            ),
                            label: "Fullscreen",
                            onClick: undefined,
                        },
                        {
                            icon: (
                                <Image
                                    src="/images/icon/shortcut-key.png"
                                    alt="Shortcut"
                                    width={14}
                                    height={14}
                                />
                            ),
                            label: "Shortcut Key",
                            onClick: undefined,
                        },
                        {
                            icon: (
                                <Image
                                    src="/images/icon/design-record.png"
                                    alt="Record"
                                    width={18}
                                    height={18}
                                />
                            ),
                            label: "Design Record",
                            onClick: undefined,
                        },
                        {
                            icon: (
                                <Image
                                    src="/images/icon/info.png"
                                    alt="Info"
                                    width={18}
                                    height={18}
                                />
                            ),
                            label: "Info",
                            onClick: undefined,
                        },
                    ].map((t) => (
                        <button
                            key={t.label}
                            title={t.label}
                            onClick={t.onClick}
                            className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 cursor-pointer"
                        >
                            {t.icon}
                        </button>
                    ))}

                    <div className="w-px h-5 bg-gray-300 mx-1" />

                    <button
                        title="Undo"
                        onClick={handleUndo}
                        className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 cursor-pointer"
                    >
                        <Undo2 size={18} />
                    </button>
                    <button
                        title="Redo"
                        className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 cursor-pointer"
                    >
                        <Redo2 size={18} />
                    </button>
                    <button
                        title="Clear"
                        onClick={handleClear}
                        className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 cursor-pointer"
                    >
                        <Eraser size={18} />
                    </button>
                </div>

                {/* Recommended pixels */}
                <div className="text-right text-gray-400 text-xs mt-1 mr-3 shrink-0">
                    Recommended Pixels: 2165 * 2666
                </div>

                {/* Canvas scroll area */}
                <div className="flex-1 overflow-auto flex items-start justify-center px-4">
                    <div className="flex gap-4 items-start">
                        {/* Face thumbnails */}
                        <div className="flex flex-col gap-2 shrink-0">
                            <button className="text-xs shadow bg-white text-gray-500 border border-gray-200 rounded-md px-2 py-1.5 hover:bg-gray-50 whitespace-nowrap cursor-pointer">
                                Copy face
                            </button>
                            {product.images.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveThumb(i)}
                                    className={`w-20 h-20 shadow rounded-md overflow-hidden border-2 transition-colors relative cursor-pointer ${activeThumb === i
                                        ? "border-blue-500"
                                        : "border-gray-200"
                                        }`}
                                >
                                    <Image
                                        src={img}
                                        alt=""
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Canvas + warning */}
                        <div className="flex flex-col items-center gap-2 shrink-0">
                            <p className="text-sm text-red-500 text-center font-medium w-full max-w-137.5">
                                In order to comply with the production
                                specifications, please ensure that the design
                                elements are always within the red line!
                            </p>

                            {/* Canvas wrapper */}
                            <div
                                className="relative shadow-lg"
                                style={{
                                    width: CANVAS_SIZE,
                                    height: CANVAS_SIZE,
                                }}
                            >
                                {/* Checkerboard nền */}
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        backgroundImage:
                                            "repeating-conic-gradient(#a8a8a8 0% 25%, #e8e8e8 0% 50%)",
                                        backgroundSize: "32px 32px",
                                    }}
                                />

                                {/* Center dashed line — nằm trong viền đỏ */}
                                <div
                                    className="absolute border-l-2 border-dashed border-blue-500 pointer-events-none z-20"
                                    style={{
                                        left: "50%",
                                        transform: "translateX(-1px)",
                                        top: "50px",
                                        bottom: "50px",
                                    }}
                                />

                                {/* Fabric.js canvas */}
                                <div className="absolute inset-0 z-10">
                                    <canvas ref={canvasElRef} />
                                </div>

                                {/* Mockup overlay */}
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={CLIP_IMAGE}
                                    alt="mockup"
                                    className="absolute inset-0 w-full h-full pointer-events-none z-30"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Right Panel ── */}
            <aside className="w-72 bg-white border-l border-gray-200 flex flex-col shrink-0">
                {/* Preview */}
                <div className="m-2 border border-gray-200 rounded-md overflow-hidden">
                    <div className="relative flex justify-center items-center py-4 bg-gray-50 min-h-52">
                        <div className="relative w-44 h-44">
                            <Image
                                src={product.images[activeThumb]}
                                alt={product.name}
                                fill
                                className="object-contain"
                            />
                        </div>

                        <button className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 cursor-pointer">
                            <ChevronLeft size={16} />
                        </button>
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 cursor-pointer">
                            <ChevronRight size={16} />
                        </button>
                    </div>

                    {/* Dots */}
                    <div className="h-10 flex items-center justify-center gap-1.5">
                        {Array.from({ length: 9 }).map((_, i) => (
                            <div
                                key={i}
                                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === activeThumb
                                    ? "bg-blue-500"
                                    : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Properties */}
                <div className="flex items-center justify-center p-4">
                    <p className="text-sm text-gray-400 text-center">
                        Please select an element to edit
                    </p>
                </div>
            </aside>
        </div>
    );
}