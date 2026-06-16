import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function ImageGallery({ images, name, discountPercent }: { images: string[]; name: string; discountPercent: string }) {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <div>
            <motion.div
                layout
                className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, scale: 1.03 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <Image
                            src={images[activeIndex]}
                            alt={name}
                            width={900}
                            height={900}
                            priority
                            className="w-full aspect-square object-cover"
                        />
                    </motion.div>
                </AnimatePresence>

                <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    -{discountPercent}%
                </div>
            </motion.div>

            {images.length > 1 && (
                <div className="flex gap-3 mt-4 overflow-x-auto pb-1">
                    {images.map((src, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`relative overflow-hidden rounded-xl border transition-all duration-300 shrink-0 ${activeIndex === i
                                ? "border-[#e0781e] scale-105 shadow-md"
                                : "border-gray-200 opacity-70 hover:opacity-100"
                                }`}
                        >
                            <Image
                                src={src}
                                alt={name}
                                width={72}
                                height={72}
                                className="w-18 h-18 object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}