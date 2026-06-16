"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// ── Helpers ──────────────────────────────────────────────────────────────────

function hsvToRgb(h: number, s: number, v: number): [number, number, number] {
    const i = Math.floor(h / 60) % 6;
    const f = h / 60 - Math.floor(h / 60);
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);
    const table: [number, number, number][] = [
        [v, t, p],
        [q, v, p],
        [p, v, t],
        [p, q, v],
        [t, p, v],
        [v, p, q],
    ];
    const [r, g, b] = table[i];
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function rgbToHex(r: number, g: number, b: number): string {
    return (
        "#" +
        [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")
    );
}

function hexToRgb(hex: string): [number, number, number] | null {
    const m = hex.replace("#", "").match(/^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    return m ? [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)] : null;
}

function rgbToHsv(r: number, g: number, b: number): [number, number, number] {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    const d = max - min;
    let h = 0;
    if (d !== 0) {
        if (max === r) h = ((g - b) / d + 6) % 6;
        else if (max === g) h = (b - r) / d + 2;
        else h = (r - g) / d + 4;
        h *= 60;
    }
    return [h, max === 0 ? 0 : d / max, max];
}

// ── Constants ─────────────────────────────────────────────────────────────────

const PRESET_COLORS = [
    "#FF0000", "#FF80FF", "#80FF00", "#00FF00", "#00FFFF", "#0000FF",
    "#008000", "#800000", "#FF8000", "#8080FF", "#FFB6C1", "#00C000",
];

const QUICK_COLORS = ["#FF0000", "#0000FF", "#FFD700"];

// ── Sub-components ────────────────────────────────────────────────────────────

interface GradientCanvasProps {
    hue: number;
    saturation: number;
    value: number;
    onChange: (s: number, v: number) => void;
}

function GradientCanvas({ hue, saturation, value, onChange }: GradientCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const dragging = useRef(false);

    const draw = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d")!;
        const { width, height } = canvas;

        // Base hue
        const [r, g, b] = hsvToRgb(hue, 1, 1);
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(0, 0, width, height);

        // White gradient left→right
        const wGrad = ctx.createLinearGradient(0, 0, width, 0);
        wGrad.addColorStop(0, "rgba(255,255,255,1)");
        wGrad.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = wGrad;
        ctx.fillRect(0, 0, width, height);

        // Black gradient top→bottom
        const bGrad = ctx.createLinearGradient(0, 0, 0, height);
        bGrad.addColorStop(0, "rgba(0,0,0,0)");
        bGrad.addColorStop(1, "rgba(0,0,0,1)");
        ctx.fillStyle = bGrad;
        ctx.fillRect(0, 0, width, height);
    }, [hue]);

    useEffect(draw, [draw]);

    const pick = useCallback(
        (clientX: number, clientY: number) => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const rect = canvas.getBoundingClientRect();
            const s = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
            const v = Math.max(0, Math.min(1, 1 - (clientY - rect.top) / rect.height));
            onChange(s, v);
        },
        [onChange]
    );

    return (
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <canvas
                ref={canvasRef}
                width={600}
                height={338}
                className="absolute inset-0 w-full h-full rounded-md cursor-crosshair"
                onMouseDown={(e) => { dragging.current = true; pick(e.clientX, e.clientY); }}
                onMouseMove={(e) => { if (dragging.current) pick(e.clientX, e.clientY); }}
                onMouseUp={() => (dragging.current = false)}
                onMouseLeave={() => (dragging.current = false)}
                onTouchStart={(e) => { dragging.current = true; pick(e.touches[0].clientX, e.touches[0].clientY); e.preventDefault(); }}
                onTouchMove={(e) => { if (dragging.current) pick(e.touches[0].clientX, e.touches[0].clientY); e.preventDefault(); }}
                onTouchEnd={() => (dragging.current = false)}
            />
            {/* Crosshair cursor */}
            <div
                className="absolute w-4 h-4 rounded-full border-2 border-white shadow-md pointer-events-none -translate-x-1/2 -translate-y-1/2"
                style={{
                    left: `${saturation * 100}%`,
                    top: `${(1 - value) * 100}%`,
                    boxShadow: "0 0 0 1px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(0,0,0,0.2)",
                }}
            />
        </div>
    );
}

interface HueSliderProps {
    hue: number;
    onChange: (h: number) => void;
}

function HueSlider({ hue, onChange }: HueSliderProps) {
    const trackRef = useRef<HTMLDivElement>(null);
    const dragging = useRef(false);

    const pick = useCallback(
        (clientX: number) => {
            const track = trackRef.current;
            if (!track) return;
            const rect = track.getBoundingClientRect();
            const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
            onChange(ratio * 360);
        },
        [onChange]
    );

    return (
        <div
            ref={trackRef}
            className="relative h-4 rounded-full cursor-pointer mt-3"
            style={{
                background:
                    "linear-gradient(to right,#f00 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,#f00 100%)",
            }}
            onMouseDown={(e) => { dragging.current = true; pick(e.clientX); }}
            onMouseMove={(e) => { if (dragging.current) pick(e.clientX); }}
            onMouseUp={() => (dragging.current = false)}
            onMouseLeave={() => (dragging.current = false)}
            onTouchStart={(e) => { dragging.current = true; pick(e.touches[0].clientX); }}
            onTouchMove={(e) => { if (dragging.current) pick(e.touches[0].clientX); }}
            onTouchEnd={() => (dragging.current = false)}
        >
            <div
                className="absolute top-1/2 w-5 h-5 rounded-full border-2 border-white shadow -translate-y-1/2 -translate-x-1/2 pointer-events-none"
                style={{ left: `${(hue / 360) * 100}%`, background: `hsl(${hue},100%,50%)` }}
            />
        </div>
    );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function ColorPicker() {
    // HSV state
    const [hue, setHue] = useState<number>(0);
    const [saturation, setSaturation] = useState<number>(0);
    const [brightness, setBrightness] = useState<number>(0);

    // Derived hex
    const [r, g, b] = hsvToRgb(hue, saturation, brightness);
    const hex = rgbToHex(r, g, b);

    // hexInput is only tracked while the user is actively typing.
    // When null, we fall back to the derived `hex` value so the field stays
    // in sync with canvas/slider changes without needing a useEffect.
    const [hexInputOverride, setHexInputOverride] = useState<string | null>(null);
    const hexInput = hexInputOverride ?? hex;

    const [customColors, setCustomColors] = useState<string[]>([]);

    const setFromHex = (value: string) => {
        const rgb = hexToRgb(value);
        if (!rgb) return;
        const [h, s, v] = rgbToHsv(...rgb);
        setHue(h); setSaturation(s); setBrightness(v);
    };

    const handleHexInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setHexInputOverride(val); // keep the raw text while typing
        if (/^#[0-9a-fA-F]{6}$/.test(val)) {
            setFromHex(val);
            setHexInputOverride(null); // valid hex → let derived value take over
        }
    };

    const handleReset = () => {
        setHue(0); setSaturation(0); setBrightness(0);
    };

    const addCustomColor = () => {
        if (!customColors.includes(hex)) setCustomColors((prev) => [...prev, hex]);
    };

    const swatchStyle = (color: string) => ({
        background: color,
        outline: color === hex ? "2px solid #2563eb" : "none",
        outlineOffset: "2px",
    });

    return (
        <div className="bg-white p-4 space-y-3">
            {/* Gradient canvas */}
            <GradientCanvas
                hue={hue}
                saturation={saturation}
                value={brightness}
                onChange={(s, v) => { setSaturation(s); setBrightness(v); }}
            />

            {/* Hue slider */}
            <HueSlider hue={hue} onChange={setHue} />

            {/* Hex input + quick swatches + reset */}
            <div className="flex items-center gap-2 mt-1">
                <input
                    type="text"
                    value={hexInput}
                    onChange={handleHexInput}
                    maxLength={7}
                    className="border border-gray-300 rounded px-2 py-1 text-sm font-mono w-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {/* Eyedropper icon (decorative) */}
                <button
                    className="p-1 rounded hover:bg-gray-100 text-gray-500"
                    title="Eyedropper"
                    onClick={() => { }}
                >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 22l4-4M18.5 3.5a2.121 2.121 0 013 3l-9 9-4 1 1-4 9-9z" />
                    </svg>
                </button>

                {/* Quick color swatches */}
                {QUICK_COLORS.map((c) => (
                    <button
                        key={c}
                        className="w-7 h-7 rounded shadow-sm hover:scale-110 transition-transform border border-gray-200"
                        style={swatchStyle(c)}
                        onClick={() => setFromHex(c)}
                        title={c}
                    />
                ))}

                <button
                    onClick={handleReset}
                    className="ml-auto text-sm px-3 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors"
                >
                    Reset
                </button>
            </div>

            {/* Add to custom color */}
            <button
                onClick={addCustomColor}
                className="w-full py-2 rounded-sm bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition-colors"
            >
                Add to custom color
            </button>

            {/* Preset colors */}
            <div>
                <p className="text-xs text-gray-500 mb-2 font-medium">Preset color</p>
                <div className="grid grid-cols-6 gap-2">
                    {PRESET_COLORS.map((c) => (
                        <button
                            key={c}
                            className="w-9 h-9 rounded-md hover:scale-110 transition-transform border border-gray-200 shadow-sm"
                            style={swatchStyle(c)}
                            onClick={() => setFromHex(c)}
                            title={c}
                        />
                    ))}
                </div>
            </div>

            {/* Custom colors */}
            <div>
                <div className="flex items-center gap-1 mb-2">
                    <p className="text-xs text-gray-500 font-medium">Custom colors</p>
                    <svg className="w-3.5 h-3.5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10A8 8 0 11 2 10a8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                </div>
                {customColors.length === 0 ? (
                    <p className="text-xs text-gray-400 italic">No custom colors yet.</p>
                ) : (
                    <div className="flex flex-wrap gap-2">
                        {customColors.map((c) => (
                            <button
                                key={c}
                                className="w-9 h-9 rounded-md hover:scale-110 transition-transform border border-gray-200 shadow-sm"
                                style={swatchStyle(c)}
                                onClick={() => setFromHex(c)}
                                title={c}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Live preview */}
            <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <div
                    className="w-10 h-10 rounded-lg border border-gray-200 shadow-inner"
                    style={{ background: hex }}
                />
                <div>
                    <p className="text-xs text-gray-400">Selected</p>
                    <p className="text-sm font-mono font-semibold text-gray-700">{hex.toUpperCase()}</p>
                    <p className="text-xs text-gray-400">
                        rgb({r}, {g}, {b})
                    </p>
                </div>
            </div>
        </div>
    );
}