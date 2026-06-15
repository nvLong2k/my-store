import Image from "next/image";
import { Eraser, Redo2, Undo2 } from "lucide-react";

const TOOLBAR_ICONS = [
    { src: "/images/icon/full-screen.png", alt: "Fullscreen", size: 16, onClick: handleFullscreen },
    { src: "/images/icon/shortcut-key.png", alt: "Shortcut Key", size: 14, onClick: undefined },
    { src: "/images/icon/design-record.png", alt: "Design Record", size: 18, onClick: undefined },
    { src: "/images/icon/info.png", alt: "Info", size: 18, onClick: undefined },
];

function handleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

export default function TopToolbar({ onUndo, onRedo, onClear, }: { onUndo: () => void; onRedo: () => void; onClear: () => void }) {
    return (
        <div className="h-12 bg-white border-b border-gray-200 flex items-center justify-center px-4 shrink-0 gap-2">
            {TOOLBAR_ICONS.map((t) => (
                <button
                    key={t.alt}
                    title={t.alt}
                    onClick={t.onClick}
                    className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 cursor-pointer"
                >
                    <Image src={t.src} alt={t.alt} width={t.size} height={t.size} />
                </button>
            ))}

            <div className="w-px h-5 bg-gray-300 mx-1" />

            {[
                { title: "Undo", icon: <Undo2 size={18} />, onClick: onUndo },
                { title: "Redo", icon: <Redo2 size={18} />, onClick: onRedo },
                { title: "Clear", icon: <Eraser size={18} />, onClick: onClear },
            ].map((btn) => (
                <button
                    key={btn.title}
                    title={btn.title}
                    onClick={btn.onClick}
                    className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 cursor-pointer"
                >
                    {btn.icon}
                </button>
            ))}
        </div>
    );
}