
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "../mock/products";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ProductInfoTabs from "./ProductInfoTabs";

export default function ProductPanel({
    product,
    activeThumb,
    activeSize,
    setActiveSize,
    activeColor,
    setActiveColor,
}: {
    product: ReturnType<typeof products.find> & object;
    activeThumb: number;
    activeSize: number;
    setActiveSize: (i: number) => void;
    activeColor: number;
    setActiveColor: (i: number) => void;
}) {
    const [openProductModal, setOpenProductModal] = useState<boolean>(false);

    return (
        <>
            <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
                {/* Header */}
                <div className="p-3 border-b border-gray-100">
                    <a
                        href={`/products/${product.id}`}
                        className="flex items-center gap-1 text-sm text-blue-500 hover:underline mb-3"
                    >
                        <ChevronLeft size={16} />
                        Return to view all products
                    </a>

                    <div className="flex gap-3">
                        <div className="w-30 h-30 rounded-md overflow-hidden bg-gray-100 shrink-0 relative border border-gray-200">
                            <Image
                                src={product.images[0]}
                                alt={product.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="min-w-0 flex flex-col gap-0.5">
                            <p className="text-sm text-gray-800 font-medium line-clamp-1 leading-snug">
                                {product.name.length > 50
                                    ? product.name.slice(0, 50) + "…"
                                    : product.name}
                            </p>
                            <p className="text-xs text-gray-400">
                                (Product Code: {String(product.id).padStart(6, "0")})
                            </p>
                            <div className="flex items-center gap-1.5 flex-wrap">
                                <span className="text-base font-semibold text-orange-500">
                                    ${(product.price - 1).toFixed(2)}
                                </span>
                                <span className="text-xs text-gray-400 line-through">
                                    ${product.originalPrice.toFixed(2)}
                                </span>
                            </div>
                            <span className="text-[10px] bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded w-fit">
                                -{product.discount}%
                            </span>
                            <button
                                onClick={() => setOpenProductModal(true)}
                                className="text-sm text-blue-500 hover:underline flex items-center cursor-pointer"
                            >
                                View details
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sizes */}
                {product.sizes && product.sizes?.length > 0 && (
                    <div className="p-3 border-b border-gray-100">
                        <p className="text-xs font-semibold text-gray-700 mb-2">Product size</p>
                        <div className="flex flex-wrap gap-1.5">
                            {product.sizes.map((s: { label: string }, i: number) => (
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

                {/* Colors */}
                {product.colors && product.colors?.length > 0 && (
                    <div className="p-3 border-b border-gray-100">
                        <p className="text-xs font-semibold text-gray-700 mb-2">Product color</p>
                        <div className="flex gap-2 flex-wrap">
                            {product.colors.map((c: { hex: string; label: string }, i: number) => (
                                <button
                                    key={i}
                                    title={c.label}
                                    onClick={() => setActiveColor(i)}
                                    style={{ background: c.hex }}
                                    className={`w-8 h-8 rounded-full border-2 transition-colors cursor-pointer ${activeColor === i ? "border-[#3699ff]" : "border-gray-200"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <Dialog open={openProductModal} onOpenChange={setOpenProductModal}>
                <DialogContent className="w-full max-w-6xl! h-[80vh] flex flex-col">
                    <DialogHeader>
                        <DialogTitle className="text-xl">Product details</DialogTitle>
                    </DialogHeader>

                    <DialogDescription asChild>
                        <div className="flex-1 overflow-y-auto">
                            <div className="flex gap-3 mt-3 w-full -mb-6">
                                <div className="w-20 h-20 rounded-md overflow-hidden bg-gray-100 shrink-0 relative border border-gray-200">
                                    <Image
                                        src={product.images[activeThumb]}
                                        alt={product.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5 w-full flex-1 min-w-0">
                                    <p className="text-base text-gray-800">
                                        {product.name}
                                    </p>

                                    <p className="text-xs text-gray-400">
                                        (Product Code: {String(product.id).padStart(6, "0")})
                                    </p>

                                    <div className="flex items-center gap-1.5 flex-wrap">
                                        <span className="text-base font-semibold text-orange-500">
                                            ${(product.price - 1).toFixed(2)}
                                        </span>
                                        <span className="text-xs text-gray-400 line-through">
                                            ${product.originalPrice.toFixed(2)}
                                        </span>

                                        <span className="text-[10px] bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded w-fit">
                                            -{product.discount}%
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <ProductInfoTabs product={product} />
                        </div>
                    </DialogDescription>
                </DialogContent>
            </Dialog>
        </>
    );
}