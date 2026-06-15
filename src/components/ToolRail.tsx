import { ImageIcon, Layers, Palette, ShoppingBag, Type } from "lucide-react";

type Tool = "select" | "upload" | "text" | "background" | "layer";

const TOOLS: { id: Tool; icon: React.ReactNode; label: string }[] = [
    { id: "upload", icon: <ShoppingBag size={20} />, label: "Product" },
    { id: "select", icon: <ImageIcon size={20} />, label: "Gallery" },
    { id: "text", icon: <Type size={20} />, label: "Text" },
    { id: "background", icon: <Palette size={20} />, label: "Background" },
    { id: "layer", icon: <Layers size={20} />, label: "Layer" },
];

export default function ToolRail({
    activeTool,
    onSelect,
}: {
    activeTool: Tool;
    onSelect: (t: Tool) => void;
}) {
    return (
        <div className="w-20 bg-white border-r border-gray-200 flex flex-col items-center">
            {TOOLS.map((tool) => (
                <button
                    key={tool.id}
                    onClick={() => onSelect(tool.id)}
                    className={`w-20 h-20 flex flex-col items-center justify-center gap-1 text-xs transition-colors cursor-pointer ${activeTool === tool.id
                        ? "bg-blue-50 text-[#3699ff] border-l-4 border-[#3699ff]"
                        : "text-gray-500 hover:bg-gray-100"
                        }`}
                >
                    {tool.icon}
                    <span className="text-xs">{tool.label}</span>
                </button>
            ))}
        </div>
    );
}