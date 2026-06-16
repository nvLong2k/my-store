import { useState } from "react";
import { Product } from "../types/products";

export default function ColorPicker({ colors }: { colors: NonNullable<Product["colors"]> }) {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <div className="mt-4">
            <div className="flex items-center justify-between mb-3">
                <p className="text-base font-bold text-gray-800">Color</p>
                <span className="text-sm text-gray-500">
                    {colors[activeIndex]?.label}
                </span>
            </div>

            <div className="flex gap-4 flex-wrap">
                {colors.map((color, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className="flex flex-col items-center gap-2"
                    >
                        <span
                            className={`w-10 h-10 rounded-full border-4 transition-all ${activeIndex === i
                                ? "border-white ring-2 ring-gray-900"
                                : "border-white ring-1 ring-gray-300"
                                }`}
                            style={{ backgroundColor: color.hex }}
                        />
                        <span
                            className={`text-xs ${activeIndex === i
                                ? "font-semibold text-gray-900"
                                : "text-gray-500"
                                }`}
                        >
                            {color.label}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}