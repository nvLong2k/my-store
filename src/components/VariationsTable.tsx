import { catalogProducts } from "../mock/catalog";

const SHIPPING_LABELS: Record<string, { label: string; sub?: string }> = {
    fastUS:            { label: "FAST US SHIPPING",      sub: "4-9 Business Days" },
    tiktokUK:          { label: "SHIPPING TIKTOK UK" },
    shipByTiktokUS:    { label: "SHIP BY TIKTOK US" },
    nonShip:           { label: "NON SHIP" },
    epacketUS:         { label: "EPACKET US SHIPPING",   sub: "7-12 Business Days" },
    shippingOutsideUS: { label: "SHIPPING OUTSIDE US" },
    shippingToUK:      { label: "SHIPPING TO UK" },
    shippingToCA:      { label: "SHIPPING TO CA" },
};

type Product = (typeof catalogProducts)[number];
type ShippingEntry = [string, { fee: number; total: number; days?: string }];

function getShippingEntries(shipping: Product["variations"][number]["shipping"]): ShippingEntry[] {
    return Object.entries(shipping).filter(([, s]) => s !== undefined) as ShippingEntry[];
}

export default function VariationsTable({ product }: { product: Product }) {
    const shippingEntries = getShippingEntries(product.variations[0].shipping);

    return (
        <section>
            <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">
                Variations ({product.variations.length})
            </h2>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                {["Size", "SKU", "Weight", "Price"].map((col) => (
                                    <th
                                        key={col}
                                        className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 whitespace-nowrap"
                                    >
                                        {col}
                                    </th>
                                ))}
                                {shippingEntries.map(([key]) => (
                                    <th
                                        key={key}
                                        className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-gray-500 whitespace-nowrap"
                                    >
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
                                const entries = getShippingEntries(variation.shipping);
                                return (
                                    <tr
                                        key={i}
                                        className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                                    >
                                        <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{variation.size}</td>
                                        <td className="px-4 py-3 font-mono text-xs text-gray-600 whitespace-nowrap">{variation.sku}</td>
                                        <td className="px-4 py-3 text-gray-600">{variation.weight}</td>
                                        <td className="px-4 py-3 text-right font-mono font-semibold text-[#27ae60]">
                                            ${(variation.price - 1).toFixed(1)}
                                        </td>
                                        {entries.map(([key, s]) => (
                                            <td key={key} className="px-4 py-3 text-right">
                                                <span className="block font-mono font-semibold text-blue-500">
                                                    {s.fee === 0 ? s.fee.toFixed(2) : (s.fee - 2).toFixed(2)}
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
    );
}