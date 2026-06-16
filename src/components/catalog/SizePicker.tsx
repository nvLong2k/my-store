export default function SizePicker({
    sizes,
    selected,
    error,
    onSelect,
}: {
    sizes: string[];
    selected: string | null;
    error: boolean;
    onSelect: (size: string) => void;
}) {
    return (
        <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
                Sizes
            </p>
            <div className="flex flex-wrap gap-2">
                {sizes.map((s) => (
                    <button
                        key={s}
                        onClick={() => onSelect(s)}
                        className={`px-4 py-1.5 rounded-md border text-sm font-medium transition-colors cursor-pointer ${selected === s
                            ? "border-blue-500 bg-blue-50 text-blue-600"
                            : error
                                ? "border-red-400 text-gray-700"
                                : "border-gray-300 text-gray-700 hover:border-blue-400"
                            }`}
                    >
                        {s}
                    </button>
                ))}
            </div>
            {error && !selected && (
                <p className="text-xs text-red-500 mt-1">Please select a size</p>
            )}
        </div>
    );
}