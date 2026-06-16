import Image from "next/image";
import { CatalogProduct } from "../types/catalog";

export default function DescriptionSection({ product }: { product: CatalogProduct }) {
    const hasContent = product.description || product.imageDescription;

    return (
        <section>
            <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">
                Description
            </h2>
            <div className="bg-white rounded-xl border border-gray-200 p-5">
                {!hasContent && (
                    <p className="text-sm text-gray-400 italic mb-2">No description available.</p>
                )}

                {product.description && (
                    <p className="text-sm text-gray-700 whitespace-pre-line mb-5 leading-7 -mt-8">
                        {product.description}
                    </p>
                )}

                {product.imageDescription && (
                    <div className="mb-4">
                        <div className="relative w-full min-h-75">
                            <Image
                                src={product.imageDescription}
                                alt={`${product.name} description`}
                                width={1200}
                                height={800}
                                className="w-full rounded-md h-auto"
                            />
                        </div>
                    </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                            Chất liệu vải
                        </p>
                        <p className="text-sm text-gray-700 font-medium">{product.material}</p>
                    </div>
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                            Vị trí in/thêu
                        </p>
                        <p className="text-sm text-gray-700 font-medium">
                            {product.printPositions.join(", ")}
                        </p>
                    </div>
                    <div className="sm:col-span-2">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                            Danh mục
                        </p>
                        <p className="text-sm text-gray-700 font-medium">{product.category}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}