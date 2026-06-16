import Image from "next/image";

export default function ImageGrid({
    label,
    images,
    activeIndex,
    indexOffset,
    onSelect,
}: {
    label: string;
    images: string[];
    activeIndex: number;
    indexOffset: number;
    onSelect: (index: number) => void;
}) {
    if (images.length === 0) return null;

    return (
        <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
                {label}
            </p>
            <div className="grid grid-cols-2 gap-1.5">
                {images.map((src, i) => {
                    const globalIndex = i + indexOffset;
                    return (
                        <button
                            key={i}
                            onClick={() => onSelect(globalIndex)}
                            className={`rounded-md overflow-hidden border-2 transition-colors cursor-pointer ${activeIndex === globalIndex
                                ? "border-blue-500"
                                : "border-gray-200 hover:border-blue-300"
                                }`}
                        >
                            <Image
                                src={src}
                                alt={`${label} ${i + 1}`}
                                width={128}
                                height={128}
                                className="w-full object-contain"
                            />
                        </button>
                    );
                })}
            </div>
        </div>
    );
}