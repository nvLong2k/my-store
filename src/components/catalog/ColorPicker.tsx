import { CatalogProduct } from "@/types/catalog";

export default function ColorPicker({
    colors,
    selected,
    error,
    onSelect,
}: {
    colors: NonNullable<CatalogProduct["colors"]>;
    selected: string | null;
    error: boolean;
    onSelect: (label: string) => void;
}) {
    return (
        <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
                Colors
            </p>
            <div className="flex flex-wrap gap-3">
                {colors.map((c) => (
                    <button
                        key={c.label}
                        title={c.label}
                        onClick={() => onSelect(c.label)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all cursor-pointer ${selected === c.label
                            ? "border-blue-500 bg-blue-50"
                            : error
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
            {error && !selected && (
                <p className="text-xs text-red-500 mt-1">Please select a color</p>
            )}
        </div>
    );
}