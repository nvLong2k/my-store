import Image from "next/image";
import { products } from "../mock/products";

const CANVAS_SIZE = 700;
const CLIP_IMAGE = "https://image.printdoors.com/admin/wdRFmM4BkG.png";

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
                        className={`w-20 h-20 shadow rounded-md overflow-hidden border transition-colors relative cursor-pointer ${activeThumb === i ? "border-blue-500" : "border-gray-200"
                            }`}
                    >
                        <Image src={img} alt="" fill className="object-cover" />
                    </button>
                ))}
            </div>

            {/* Canvas area */}
            <div className="flex flex-col items-center gap-2 shrink-0">
                <p className="text-sm text-red-500 text-center font-medium w-full max-w-175">
                    In order to comply with the production specifications, please ensure
                    that the design elements are always within the red line!
                </p>

                <div
                    className="relative shadow-lg"
                    style={{ width: CANVAS_SIZE, height: CANVAS_SIZE }}
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

                    {/* Center guide line */}
                    <div
                        className="absolute border-l-2 border-dashed border-blue-500 pointer-events-none z-20"
                        style={{
                            left: "50%",
                            transform: "translateX(-1px)",
                            top: "250px",
                            bottom: "250px",
                        }}
                    />

                    {/* Fabric canvas */}
                    <div className="absolute inset-0 z-10">
                        <canvas ref={canvasRef} />
                    </div>

                    {/* Mockup overlay */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={CLIP_IMAGE}
                        alt="mockup"
                        className="absolute inset-0 w-full h-full pointer-events-none z-30"
                    />
                </div>
            </div>
        </div>
    );
}