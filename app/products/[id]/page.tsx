// app/products/[id]/page.tsx

import Image from "next/image";
import { notFound } from "next/navigation";

import { products } from "@/src/mock/products";

type Props = {
    params: {
        id: string;
    };
};

export default async function ProductDetailPage({ params }: Props) {
    const { id } = await params;
    const product = products.find((item) => String(item.id) === id);

    if (!product) {
        notFound();
    }

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            <div className="grid md:grid-cols-2 gap-10">
                <div className="relative aspect-square bg-[#f5f4f0] rounded-xl overflow-hidden">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                    />
                </div>

                <div>
                    <h1 className="text-3xl font-semibold mb-4">
                        {product.name}
                    </h1>

                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl font-bold text-[#e0781e]">
                            ${product.price.toFixed(2)}
                        </span>

                        <span className="line-through text-gray-400">
                            ${product.originalPrice.toFixed(2)}
                        </span>
                    </div>

                    <p className="text-gray-500 mb-6">
                        Avg. production time {product.avgProductionDays} days
                    </p>

                    <button className="bg-black text-white px-6 py-3 rounded-lg">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}