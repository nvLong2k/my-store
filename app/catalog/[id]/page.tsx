"use client";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

import { catalogProducts } from "@/mock/catalog";
import { notFound } from "next/navigation";
import { use, useState } from "react";
import VariationsTable from "@/components/VariationsTable";
import DescriptionSection from "@/components/DescriptionSection";
import SidebarHeroImage from "@/components/SidebarHeroImage";
import ColorPicker from "@/components/catalog/ColorPicker";
import SizePicker from "@/components/catalog/SizePicker";
import ImageGrid from "@/components/catalog/ImageGrid";
import SidebarMeta from "@/components/catalog/SidebarMeta";

// ─── Constants ────────────────────────────────────────────────────────────────

const TEMP_DESIGN_IMAGE = "/images/2aOboQawTuDGi85yGHXYyvUHmShkZRjJWxtWtojg.jpg";

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const product = catalogProducts.find((p) => p.id === Number(id));
    if (!product) notFound();

    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [sizeError, setSizeError] = useState<boolean>(false);
    const [colorError, setColorError] = useState<boolean>(false);
    const [activeImage, setActiveImage] = useState<number>(0);
    const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);

    const lightboxSlides = [
        { src: TEMP_DESIGN_IMAGE, title: "Temp Design" },
        ...(product.imageAlbum ?? []).map((src) => ({ src })),
    ];

    function openLightbox(index: number) {
        setActiveImage(index);
        setLightboxOpen(true);
    }

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            <div className="flex flex-col lg:flex-row max-w-7xl mx-auto py-10">

                {/* Sidebar */}
                <aside className="w-full lg:w-72 xl:w-80 bg-white border rounded-xl border-gray-200 shrink-0 p-6 flex flex-col gap-5 h-fit">
                    <SidebarMeta product={product} />

                    <SidebarHeroImage
                        src={product.images?.[0]}
                        name={product.name}
                    />

                    <ImageGrid
                        label="Temp design"
                        images={[TEMP_DESIGN_IMAGE]}
                        activeIndex={activeImage}
                        indexOffset={0}
                        onSelect={openLightbox}
                    />

                    {product.imageAlbum && product.imageAlbum.length > 0 && (
                        <ImageGrid
                            label="Image Album"
                            images={product.imageAlbum}
                            activeIndex={activeImage}
                            indexOffset={1}
                            onSelect={openLightbox}
                        />
                    )}

                    <SizePicker
                        sizes={product.sizes}
                        selected={selectedSize}
                        error={sizeError}
                        onSelect={(s) => { setSelectedSize(s); setSizeError(false); }}
                    />

                    {product.colors && (
                        <ColorPicker
                            colors={product.colors}
                            selected={selectedColor}
                            error={colorError}
                            onSelect={(c) => { setSelectedColor(c); setColorError(false); }}
                        />
                    )}
                </aside>

                {/* Main */}
                <main className="flex-1 p-6 flex flex-col gap-6 min-w-0">
                    <VariationsTable product={product} />
                    <DescriptionSection product={product} />
                </main>
            </div>

            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                index={activeImage}
                plugins={[Zoom]}
                slides={lightboxSlides}
            />
        </div>
    );
}