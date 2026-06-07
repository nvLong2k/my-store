"use client";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";

import { catalogProducts } from "@/src/mock/catalog";
import { notFound } from "next/navigation";
import { use, useState } from "react";

const SHIPPING_LABELS: Record<string, { label: string; sub?: string }> = {
    fastUS: { label: "FAST US SHIPPING", sub: "4-9 Business Days" },
    tiktokUK: { label: "SHIPPING TIKTOK UK" },
    shipByTiktokUS: { label: "SHIP BY TIKTOK US" },
    nonShip: { label: "NON SHIP" },
    epacketUS: { label: "EPACKET US SHIPPING", sub: "7-12 Business Days" },
    shippingOutsideUS: { label: "SHIPPING OUTSIDE US" },
    shippingToUK: { label: "SHIPPING TO UK" },
    shippingToCA: { label: "SHIPPING TO CA" },
};

export default function ProductPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = use(params);
    const product = catalogProducts.find((p) => p.id === Number(id));
    if (!product) notFound();

    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [sizeError, setSizeError] = useState<boolean>(false);
    const [colorError, setColorError] = useState<boolean>(false);
    const [activeImage, setActiveImage] = useState<number>(0);
    const [openLightbox, setOpenLightbox] = useState<boolean>(false);
    const tempDesignImage = "/images/2aOboQawTuDGi85yGHXYyvUHmShkZRjJWxtWtojg.jpg";
    const lightboxSlides = [
        { src: tempDesignImage, title: "Temp Design" },
        ...(product.imageAlbum ?? []).map((src) => ({ src })),
    ];

    const v = product.variations[0];
    const shippingEntries = Object.entries(v.shipping).filter(
        ([, s]) => s !== undefined
    ) as [string, { fee: number; total: number; days?: string }][];

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            <div className="flex flex-col lg:flex-row max-w-7xl mx-auto py-10">

                {/* ── Sidebar ── */}
                <aside className="w-full lg:w-72 xl:w-80 bg-white border rounded-xl border-gray-200 shrink-0 p-6 flex flex-col gap-5 h-fit">

                    {/* Meta */}
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">Name</span>
                            <p className="text-xs font-semibold tracking-widest uppercase text-blue-500 leading-snug">
                                {product.name}
                            </p>
                        </div>
                        <p className="text-sm text-gray-500">
                            Product Code{" "}
                            <span className="text-blue-500 font-medium">{product.productCode}</span>
                        </p>
                        <p className="text-sm text-gray-500">
                            SKU <span className="text-blue-500 font-medium">{product.sku}</span>
                        </p>
                    </div>

                    {/* Hero */}
                    <div className="rounded-xl overflow-hidden bg-gray-100 aspect-square">
                        {product.images?.[activeImage] ? (
                            <button
                                type="button"
                                className="w-full h-full cursor-zoom-in"
                            >
                                <img
                                    src={product.images[activeImage]}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-300 text-sm">
                                No image
                            </div>
                        )}
                    </div>

                    <div>
                        <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
                            Temp design
                        </p>
                        <div className="grid grid-cols-2 gap-1.5">
                            <button
                                onClick={() => {
                                    setActiveImage(0);
                                    setOpenLightbox(true);
                                }}
                                className={`rounded-md overflow-hidden border-2 transition-colors cursor-pointer`}
                            >
                                <img
                                    src={tempDesignImage}
                                    alt="Image temp"
                                    className="w-full aspect-square object-cover"
                                />
                            </button>
                        </div>
                    </div>

                    {/* Album */}
                    {product.imageAlbum && product.imageAlbum.length > 0 && (
                        <div>
                            <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
                                Image Album
                            </p>
                            <div className="grid grid-cols-2 gap-1.5">
                                {product.imageAlbum?.map((src, i) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            setActiveImage(i + 1);
                                            setOpenLightbox(true);
                                        }}
                                        className={`rounded-md overflow-hidden border-2 transition-colors cursor-pointer ${activeImage === i
                                            ? "border-blue-500"
                                            : "border-transparent hover:border-blue-300"
                                            }`}
                                    >
                                        <img
                                            src={src}
                                            alt={`${product.name} ${i + 1}`}
                                            className="w-full aspect-square object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Sizes */}
                    <div>
                        <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
                            Sizes
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {product.sizes.map((s) => (
                                <button
                                    key={s}
                                    onClick={() => {
                                        setSelectedSize(s);
                                        setSizeError(false);
                                    }}
                                    className={`px-4 py-1.5 rounded-md border text-sm font-medium transition-colors cursor-pointer ${selectedSize === s
                                        ? "border-blue-500 bg-blue-50 text-blue-600"
                                        : sizeError
                                            ? "border-red-400 text-gray-700"
                                            : "border-gray-300 text-gray-700 hover:border-blue-400"
                                        }`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                        {sizeError && !selectedSize && (
                            <p className="text-xs text-red-500 mt-1">Please select a size</p>
                        )}
                    </div>

                    {/* Colors — dùng product.colors trực tiếp, hex nằm trong từng sản phẩm */}
                    {
                        product.colors && (
                            <div>
                                <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
                                    Colors
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {product.colors?.map((c) => (
                                        <button
                                            key={c.label}
                                            title={c.label}
                                            onClick={() => {
                                                setSelectedColor(c.label);
                                                setColorError(false);
                                            }}
                                            className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all cursor-pointer ${selectedColor === c.label
                                                ? "border-blue-500 bg-blue-50"
                                                : colorError
                                                    ? "border-red-400"
                                                    : "border-gray-200 hover:border-blue-300"
                                                }`}
                                        >
                                            <span
                                                style={{ backgroundColor: c.hex }}
                                                className="w-5 h-5 rounded-full border border-gray-300 shrink-0"
                                            />

                                            <span className="text-sm text-gray-700">
                                                {c.label.replace(/_/g, " ")}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                                {colorError && !selectedColor && (
                                    <p className="text-xs text-red-500 mt-1">Please select a color</p>
                                )}
                            </div>
                        )
                    }
                </aside>

                {/* ── Main ── */}
                <main className="flex-1 p-6 flex flex-col gap-6 min-w-0">

                    {/* Variations table */}
                    <section>
                        <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">
                            Variations ({product.variations.length})
                        </h2>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-gray-50 border-b border-gray-200">
                                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 whitespace-nowrap">Size</th>
                                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 whitespace-nowrap">SKU</th>
                                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 whitespace-nowrap">Weight</th>
                                            <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-gray-500 whitespace-nowrap">Price</th>
                                            {shippingEntries.map(([key]) => (
                                                <th key={key} className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-gray-500 whitespace-nowrap">
                                                    <span className="block">{SHIPPING_LABELS[key]?.label ?? key}</span>
                                                    {SHIPPING_LABELS[key]?.sub && (
                                                        <span className="block text-gray-400 font-normal normal-case text-[10px]">
                                                            {SHIPPING_LABELS[key].sub}
                                                        </span>
                                                    )}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {product.variations.map((variation, i) => {
                                            const entries = Object.entries(variation.shipping).filter(
                                                ([, s]) => s !== undefined
                                            ) as [string, { fee: number; total: number }][];
                                            return (
                                                <tr key={i} className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                                                    <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{variation.size}</td>
                                                    <td className="px-4 py-3 font-mono text-xs text-gray-600 whitespace-nowrap">{variation.sku}</td>
                                                    <td className="px-4 py-3 text-gray-600">{variation.weight}</td>
                                                    <td className="px-4 py-3 text-right font-mono font-semibold text-[#27ae60]">
                                                        ${(variation.price - 1).toFixed(1)}
                                                    </td>
                                                    {entries.map(([key, s]) => (
                                                        <td key={key} className="px-4 py-3 text-right">
                                                            <span className="block font-mono font-semibold text-blue-500">
                                                                {
                                                                    s.fee === 0 ? s.fee.toFixed(2) : (s.fee - 2).toFixed(2)
                                                                }
                                                            </span>
                                                            <span className="block font-mono text-xs text-gray-400">
                                                                Total: ${(s.total - 2).toFixed(2)}
                                                            </span>
                                                        </td>
                                                    ))}
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Description */}
                    <section>
                        <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">
                            Description
                        </h2>
                        <div className="bg-white rounded-xl border border-gray-200 p-5">
                            {
                                product.description &&
                                <p className="text-sm text-gray-700 whitespace-pre-line mb-5 leading-7 -mt-8">
                                    {product.description}
                                </p>
                            }

                            {
                                product.imageDescription &&
                                <div className="mb-4">
                                    <img
                                        src={product.imageDescription}
                                        alt={`${product.name} description`}
                                        className="w-full rounded-md object-cover"
                                    />
                                </div>

                            }

                            {
                                !product.imageDescription && !product.description &&
                                <p className="text-sm text-gray-400 italic mb-2">
                                    No description available.
                                </p>
                            }

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                                        Chất liệu vải
                                    </p>
                                    <p className="text-sm text-gray-700 font-medium">{product.material}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                                        Vị trí in/thêu
                                    </p>
                                    <p className="text-sm text-gray-700 font-medium">
                                        {product.printPositions.join(", ")}
                                    </p>
                                </div>
                                <div className="sm:col-span-2">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                                        Danh mục
                                    </p>
                                    <p className="text-sm text-gray-700 font-medium">{product.category}</p>
                                </div>
                            </div>
                        </div>
                    </section>

                </main>
            </div>

            <Lightbox
                open={openLightbox}
                close={() => setOpenLightbox(false)}
                index={activeImage}
                plugins={[Zoom]}
                slides={lightboxSlides}
            />
        </div>
    );
}