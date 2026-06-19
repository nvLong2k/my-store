"use client";

import { useState } from "react";
import { HexColorPicker } from "react-colorful";

const PRESET_COLORS = [
    "#FF0000",
    "#FF80FF",
    "#80FF00",
    "#00FF00",
    "#00FFFF",
    "#0000FF",
    "#008000",
    "#800000",
    "#FF8000",
    "#8080FF",
    "#FFB6C1",
    "#00C000",
];

const QUICK_COLORS = ["#FF0000", "#0000FF", "#FFD700"];

function hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : null;
}

export default function ColorPicker() {
    const [color, setColor] = useState<string>("#ff0000");
    const [customColors, setCustomColors] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>(color);

    const handleColorChange = (value: string) => {
        setColor(value);
        setInputValue(value);
    };

    const handleHexInput = (value: string) => {
        setInputValue(value);

        if (/^#[0-9A-Fa-f]{6}$/.test(value)) {
            setColor(value);
        }
    };

    const handleReset = () => {
        setColor("#000000");
        setInputValue("#000000");
    };

    const addCustomColor = () => {
        if (!customColors.includes(color.toUpperCase())) {
            setCustomColors((prev) => [...prev, color.toUpperCase()]);
        }
    };

    const rgb = hexToRgb(color);

    const swatchStyle = (c: string) => ({
        backgroundColor: c,
        outline:
            c.toLowerCase() === color.toLowerCase()
                ? "2px solid #2563eb"
                : "none",
        outlineOffset: "2px",
    });

    return (
        <div className="bg-white p-4 space-y-4 w-80 border-r">
            {/* Picker */}
            <HexColorPicker
                color={color}
                onChange={handleColorChange}
                style={{
                    width: "100%",
                    height: "200px",
                }}
            />

            {/* Hex Input + Quick Colors */}
            <div className="flex items-center gap-2">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => handleHexInput(e.target.value)}
                    maxLength={7}
                    className="border border-gray-300 rounded px-2 py-1 text-sm font-mono w-24"
                />

                {QUICK_COLORS.map((c) => (
                    <button
                        key={c}
                        className="w-7 h-7 rounded border border-gray-200 shadow-sm hover:scale-110 transition-transform"
                        style={swatchStyle(c)}
                        onClick={() => handleColorChange(c)}
                        title={c}
                    />
                ))}

                <button
                    onClick={handleReset}
                    className="ml-auto text-sm px-3 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white"
                >
                    Reset
                </button>
            </div>

            {/* Add Custom Color */}
            <button
                onClick={addCustomColor}
                className="w-full py-2 rounded-sm bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium"
            >
                Add to custom color
            </button>

            {/* Preset Colors */}
            <div>
                <p className="text-xs text-gray-500 mb-2 font-medium">
                    Preset color
                </p>

                <div className="grid grid-cols-6 gap-2">
                    {PRESET_COLORS.map((c) => (
                        <button
                            key={c}
                            className="w-9 h-9 rounded-md border border-gray-200 shadow-sm hover:scale-110 transition-transform"
                            style={swatchStyle(c)}
                            onClick={() => handleColorChange(c)}
                            title={c}
                        />
                    ))}
                </div>
            </div>

            {/* Custom Colors */}
            <div>
                <div className="flex items-center gap-1 mb-2">
                    <p className="text-xs text-gray-500 font-medium">
                        Custom colors
                    </p>
                </div>

                {customColors.length === 0 ? (
                    <p className="text-xs text-gray-400 italic">
                        No custom colors yet.
                    </p>
                ) : (
                    <div className="flex flex-wrap gap-2">
                        {customColors.map((c) => (
                            <button
                                key={c}
                                className="w-9 h-9 rounded-md border border-gray-200 shadow-sm hover:scale-110 transition-transform"
                                style={swatchStyle(c)}
                                onClick={() => handleColorChange(c)}
                                title={c}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Preview */}
            <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <div
                    className="w-10 h-10 rounded-lg border border-gray-200"
                    style={{
                        backgroundColor: color,
                    }}
                />

                <div>
                    <p className="text-xs text-gray-400">Selected</p>

                    <p className="text-sm font-mono font-semibold text-gray-700">
                        {color.toUpperCase()}
                    </p>

                    {rgb && (
                        <p className="text-xs text-gray-400">
                            rgb({rgb.r}, {rgb.g}, {rgb.b})
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}