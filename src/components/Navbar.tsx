"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
    const router = useRouter();

    const [showTop, setShowTop] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowTop(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-gray-200">
            <div>
                <div className="max-w-7xl mx-auto px-4 relative">
                    <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
                        <Link
                            href="/"
                            className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border border-gray-200 hover:bg-black hover:text-white transition"
                        >
                            All products
                        </Link>

                        <Link
                            href="/products"
                            className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border border-gray-200 hover:bg-black hover:text-white transition"
                        >
                            🇺🇸 Made in USA
                        </Link>

                        <Link
                            href="/catalog"
                            className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border border-gray-200 hover:bg-black hover:text-white transition"
                        >
                            🇻🇳 Made in Vietnam
                        </Link>
                    </div>
                </div>

                <button
                    onClick={() => router.back()}
                    className="absolute left-2.5 top-2.5 hidden 2xl:flex gap-2 items-center hover:cursor-pointer whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border border-gray-200 hover:scale-105 transition"
                >
                    <img
                        src='/images/images.png'
                        alt="back"
                        className="w-6 h-6 object-cover"
                    />
                    Back
                </button>

                {showTop && (
                    <button
                        onClick={() =>
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            })
                        }
                        className="hidden 2xl:flex justify-center items-center absolute hover:cursor-pointer top-2 left-28 z-50 border border-gray-200 w-12 h-12 rounded-full hover:scale-110 transition rotate-90"
                    >
                        <img
                            src='/images/images.png'
                            alt="back"
                            className="w-6 h-6 object-cover"
                        />
                    </button>
                )}
            </div>
        </div>
    );
}