import { Product } from "../types/products";

export default function MetaGrid({ product }: { product: Product }) {
    if (!product.meta) return null;

    const items = [
        { label: "Material", value: product.meta.material },
        { label: "Weight", value: product.meta.weight },
        { label: "Production", value: `${product.avgProductionDays} days` },
    ];

    return (
        <div className="grid grid-cols-3 gap-3 mt-4">
            {items.map((item) => (
                <div
                    key={item.label}
                    className="bg-white border border-gray-200 rounded-2xl p-4"
                >
                    <p className="text-xs text-gray-400 mb-2">{item.label}</p>
                    <p className="text-sm font-medium text-gray-800 leading-snug">
                        {item.value}
                    </p>
                </div>
            ))}
        </div>
    );
}