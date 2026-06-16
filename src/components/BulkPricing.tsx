import { Product } from "../types/products";

export default function BulkPricing({ product }: { product: Product }) {
    if (!product.bulkPricing || product.bulkPricing.length === 0) {
        return (
            <div className="bg-white border border-gray-200 rounded-2xl p-4 mt-4">
                <p className="text-[12px] text-gray-500 font-medium mb-1">
                    Bulk Price
                </p>
                <p className="line-through text-gray-600">
                    ${product.originalPrice.toFixed(2)}
                </p>
                <p className="text-gray-400 text-[12px]">1+ Pieces</p>
            </div>
        );
    }

    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-4 mt-4">
            <p className="text-[12px] text-gray-500 font-medium mb-2">
                Bulk Price:
            </p>
            <div className="flex gap-4 flex-wrap">
                {product.bulkPricing.map((tier, i) => (
                    <div key={i}>
                        <div className="flex items-baseline gap-1.5">
                            {tier?.price && (
                                <span className="font-medium text-gray-800">
                                    ${tier.price.toFixed(2)}
                                </span>
                            )}
                            <span className="text-gray-400 line-through text-[12px]">
                                ${tier?.realPrice?.toFixed(2)}
                            </span>
                        </div>
                        <p className="text-gray-400 text-[12px] mt-0.5">
                            {tier.maxQty
                                ? `${tier.minQty}-${tier.maxQty}`
                                : `${tier.minQty}+`}{" "}
                            Pieces
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}