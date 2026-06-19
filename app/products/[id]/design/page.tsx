"use client";

import { notFound } from "next/navigation";
import { use, useEffect, useRef, useState } from "react";
import { products } from "@/mock/products";
import * as fabric from "fabric";
import PreviewPanel from "@/components/PreviewPanel";
import DesignCanvas from "@/components/DesignCanvas";
import TopToolbar from "@/components/TopToolbar";
import ProductPanel from "@/components/ProductPanel";
import ToolRail from "@/components/ToolRail";
import ColorPicker from "@/components/design/Colorpicker";

type Tool = "select" | "upload" | "text" | "background" | "layer";

const BREAKPOINT_2XL = 1536; // Tailwind's 2xl breakpoint

function getCanvasSize() {
    if (typeof window === "undefined") return 700;
    return window.innerWidth >= BREAKPOINT_2XL ? 700 : 500;
}

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
    const [canvasSize, setCanvasSize] = useState<number>(getCanvasSize);

    const canvasElRef = useRef<HTMLCanvasElement>(null);
    const fabricRef = useRef<fabric.Canvas | null>(null);

    // Handle responsive canvas size
    useEffect(() => {
        const handleResize = () => {
            const newSize = getCanvasSize();
            setCanvasSize((prev) => (prev !== newSize ? newSize : prev));
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Init / reinit Fabric when canvasSize changes
    useEffect(() => {
        if (!canvasElRef.current) return;

        // Dispose existing instance before creating a new one
        if (fabricRef.current) {
            fabricRef.current.dispose();
            fabricRef.current = null;
        }

        const fc = new fabric.Canvas(canvasElRef.current, {
            width: canvasSize,
            height: canvasSize,
            backgroundColor: "transparent",
            preserveObjectStacking: true,
        });
        fabricRef.current = fc;

        return () => {
            fc.dispose();
            fabricRef.current = null;
        };
    }, [canvasSize]);

    const handleUndo = () => {
        const fc = fabricRef.current;
        if (!fc) return;
        const objs = fc.getObjects();
        if (objs.length > 0) {
            fc.remove(objs[objs.length - 1]);
            fc.renderAll();
        }
    };

    const handleRedo = () => {/* TODO */ };
    const handleClear = () => {
        fabricRef.current?.clear();
        fabricRef.current?.renderAll();
    };

    return (
        <div className="flex min-h-0 bg-gray-100 overflow-hidden h-[calc(100vh-66px)]">
            {/* Left sidebar */}
            <aside className="flex h-full shrink-0">
                <ToolRail activeTool={activeTool} onSelect={setActiveTool} />

                {
                    (activeTool === "upload" || activeTool === "layer" || activeTool === "select") &&
                    <ProductPanel
                        product={product}
                        activeSize={activeSize}
                        setActiveSize={setActiveSize}
                        activeColor={activeColor}
                        setActiveColor={setActiveColor}
                    />
                }

                {
                    activeTool === "background" &&
                    <ColorPicker />
                }

                {
                    activeTool === "text" &&
                    <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto flex flex-col items-center">
                        <button className="bg-[#f6f7f9] mt-4 py-1 hover:cursor-pointer rounded-sm w-72">+ Add text</button>
                    </div>
                }

            </aside>

            {/* Center */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <TopToolbar
                    onUndo={handleUndo}
                    onRedo={handleRedo}
                    onClear={handleClear}
                />
                <div className="text-right text-gray-400 text-xs mt-1 mr-3 shrink-0">
                    Recommended Pixels: 2165 * 2666
                </div>
                <div className="flex-1 overflow-auto flex items-start justify-center px-4">
                    <DesignCanvas
                        canvasRef={canvasElRef}
                        product={product}
                        activeThumb={activeThumb}
                        setActiveThumb={setActiveThumb}
                    />
                </div>
            </div>

            {/* Right panel */}
            <PreviewPanel product={product} activeThumb={activeThumb} />
        </div>
    );
}