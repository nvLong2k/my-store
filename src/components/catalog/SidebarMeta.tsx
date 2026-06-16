import { CatalogProduct } from "@/src/types/catalog";

export default function SidebarMeta({ product }: { product: CatalogProduct }) {
    return (
        <div className="space-y-1">
            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Name</span>
                <p className="text-xs font-semibold tracking-widest uppercase text-blue-500 leading-snug">
                    {product.name}
                </p>
            </div>
            <p className="text-sm text-gray-500">
                Product Code{" "}
                <span className="text-blue-500 font-medium">{product.productCode}</span>
            </p>
            <p className="text-sm text-gray-500">
                SKU <span className="text-blue-500 font-medium">{product.sku}</span>
            </p>
        </div>
    );
}