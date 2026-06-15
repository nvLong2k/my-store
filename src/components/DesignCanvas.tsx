import Image from "next/image";
import { products } from "../mock/products";

const CANVAS_SIZE = 700;

const OVERLAYS: Record<number, string> = {
    2: "https://image.printdoors.com/admin/dJfBNN5Y3N.png",
    3: "https://image.printdoors.com/admin/dJfBNN5Y3N.png",
    4: "https://image.printdoors.com/admin/6cQsxRKin4.png",
    5: "https://image.printdoors.com/admin/5FkeKiycny.png",
    6: "https://image.printdoors.com/admin/CxjCxjYB5J.png",
    7: "https://image.printdoors.com/admin/PmPFsHt4Nc.png",
    8: "https://image.printdoors.com/admin/wJwQFiCwFh.png",
    9: "https://image.printdoors.com/admin/nP2GCNbzXK.png",
    10: "https://image.printdoors.com/admin/iwFKbiEkPz.png",
    11: "https://image.printdoors.com/admin/MwmExyjSMd.png",
    12: "https://image.printdoors.com/admin/4zxdW7428a.png",
    13: "https://image.printdoors.com/admin/bpeQhcBY5j.png",
    14: "https://image.printdoors.com/admin/sNDjENaDnf.png",
    15: "https://image.printdoors.com/admin/sNDjENaDnf.png",
    16: "https://image.printdoors.com/admin/jfSr7Byrsi.png",
    17: "https://image.printdoors.com/admin/nRGJszcNep.png",
    18: "https://image.printdoors.com/admin/mCDxEYFPYb.png",
    19: "https://image.printdoors.com/admin/r4mf2fD4fG.png",
    20: "https://image.printdoors.com/admin/64RTzfHReG.png",
    21: "https://image.printdoors.com/admin/KXRbfxeiC3.png",
    22: "https://image.printdoors.com/admin/KXRbfxeiC3.png",
    23: "https://image.printdoors.com/admin/KXRbfxeiC3.png",
    24: "https://image.printdoors.com/admin/5mhmshYCAy.png",
    25: "https://image.printdoors.com/admin/pjjtDYfsbB.png",
    26: "https://image.printdoors.com/admin/wJwQFiCwFh.png",
    27: "https://image.printdoors.com/admin/Aysxj8wnAd.png",
    28: "https://image.printdoors.com/admin/r4mf2fD4fG.png",
    29: "https://image.printdoors.com/admin/nP2GCNbzXK.png",
    30: "https://image.printdoors.com/admin/nP2GCNbzXK.png",
    32: "https://image.printdoors.com/admin/nP2GCNbzXK.png",
    33: "https://image.printdoors.com/admin/pjjtDYfsbB.png",
    34: "https://image.printdoors.com/admin/pjjtDYfsbB.png",
};

export default function DesignCanvas({
    canvasRef,
    product,
    activeThumb,
    setActiveThumb,
}: {
    canvasRef: React.RefObject<HTMLCanvasElement | null>;
    product: ReturnType<typeof products.find> & object;
    activeThumb: number;
    setActiveThumb: (i: number) => void;
}) {
    const overlayImage = OVERLAYS[product.id];

    return (
        <div className="flex gap-4 items-start">
            {/* Face thumbnails */}
            <div className="flex flex-col gap-2 shrink-0">
                <button className="text-xs shadow bg-white text-gray-500 border border-gray-200 rounded-md px-2 py-1.5 hover:bg-gray-50 whitespace-nowrap cursor-pointer">
                    Copy face
                </button>

                {product.images.map((img: string, i: number) => (
                    <button
                        key={i}
                        onClick={() => setActiveThumb(i)}
                        className={`w-20 h-20 shadow rounded-md overflow-hidden border transition-colors relative cursor-pointer ${activeThumb === i
                                ? "border-blue-500"
                                : "border-gray-200"
                            }`}
                    >
                        <Image
                            src={img}
                            alt=""
                            fill
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>

            {/* Canvas */}
            <div className="flex flex-col items-center gap-2 shrink-0">
                <p className="text-sm text-red-500 text-center font-medium w-full max-w-175">
                    In order to comply with the production specifications,
                    please ensure that the design elements are always within
                    the red line!
                </p>

                {overlayImage && (
                    <div
                        className="relative shadow-lg"
                        style={{
                            width: CANVAS_SIZE,
                            height: CANVAS_SIZE,
                        }}
                    >
                        {/* Checkerboard background */}
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage:
                                    "repeating-conic-gradient(#a8a8a8 0% 25%, #e8e8e8 0% 50%)",
                                backgroundSize: "32px 32px",
                            }}
                        />

                        {/* Fabric canvas */}
                        <div className="absolute inset-0 z-10">
                            <canvas ref={canvasRef} />
                        </div>

                        {/* Overlay */}
                        <img
                            src={overlayImage}
                            alt="mockup"
                            className="absolute inset-0 w-full h-full pointer-events-none z-30"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}