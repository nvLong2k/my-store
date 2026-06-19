import Image from "next/image";
import { products } from "@/mock/products";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PreviewPanel({
    product,
    activeThumb,
}: {
    product: ReturnType<typeof products.find> & object;
    activeThumb: number;
}) {
    return (
        <aside className="w-72 bg-white border-l border-gray-200 flex flex-col shrink-0">
            <div className="m-2 border border-gray-200 rounded-md overflow-hidden">
                <div className="relative flex justify-center items-center py-4 bg-gray-50 min-h-52">
                    <div className="relative w-44 h-44">
                        <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-contain"
                        />
                    </div>
                    {[
                        { side: "left", Icon: ChevronLeft },
                        { side: "right", Icon: ChevronRight },
                    ].map(({ side, Icon }) => (
                        <button
                            key={side}
                            className={`absolute ${side}-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 cursor-pointer`}
                        >
                            <Icon size={16} />
                        </button>
                    ))}
                </div>

                {/* Dot indicators */}
                <div className="h-10 flex items-center justify-center gap-1.5">
                    {Array.from({ length: 9 }).map((_, i) => (
                        <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full transition-colors ${i === activeThumb ? "bg-blue-500" : "bg-gray-300"}`}
                        />
                    ))}
                </div>
            </div>

            <div className="flex items-center justify-center p-4">
                <p className="text-sm text-gray-400 text-center">
                    Please select an element to edit
                </p>
            </div>
        </aside>
    );
}