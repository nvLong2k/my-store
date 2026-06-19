import Image from "next/image";

export default function SidebarHeroImage({ src, name, }: { src?: string; name: string }) {
    return (
        <div className="rounded-xl overflow-hidden bg-gray-100 aspect-square">
            {src ? (
                <div className="w-full h-full">
                    <Image src={src} alt={name} width={270} height={270} className="w-full h-full object-cover" />
                </div>
            ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-300 text-sm">
                    No image
                </div>
            )}
        </div>
    );
}