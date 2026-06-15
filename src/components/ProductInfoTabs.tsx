import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Product } from "../types/products";

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

interface Props {
    product: Product;
}

export default function ProductInfoTabs({ product }: Props) {
    const [activeTab, setActiveTab] = useState<Tab>("Description");

    return (
        <div className="mt-12 bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">

            {/* Tab Header */}
            <div className="flex border-b border-gray-200 overflow-x-auto">
                {TABS.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`
                                    relative px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors
                                    ${activeTab === tab ? "text-[#e0781e]" : "text-gray-500 hover:text-gray-800"}
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
    )
}