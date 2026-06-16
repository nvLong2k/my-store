import { useState } from "react";
import { Product } from "../types/products";

export default function SizePicker({ sizes }: { sizes: NonNullable<Product["sizes"]> }) {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <div className="mt-4">
            <p className="text-base font-bold text-gray-800 mb-3">Size</p>
            <div className="flex gap-2 flex-wrap">
                {sizes.map((size, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`min-w-13 px-4 py-2 rounded-xl text-sm border transition-all duration-200 ${activeIndex === i
                            ? "bg-gray-900 text-white border-gray-900"
                            : "bg-white border-gray-300 hover:border-gray-900"
                            }`}
                    >
                        {size.label}
                    </button>
                ))}
            </div>
        </div>
    );
}