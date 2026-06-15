"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();

    const [showTop, setShowTop] = useState<boolean>(false);
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setShowTop(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setOpenMenu(false);
            }
        };

        if (openMenu) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openMenu]);

    const navItems = [
        { href: "/", label: "All products", icon: "🛍️" },
        { href: "/products", label: "Made in USA", icon: "🇺🇸" },
        { href: "/catalog", label: "Made in Vietnam", icon: "🇻🇳" },
    ];

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 relative">

                {/* Desktop menu */}
                <div className="hidden md:flex items-center gap-2 py-3">
                    <Image
                        src="/images/2aOboQaz7kj8UAqPWzsVxOxj7TC9XPXGuxAv2iQ4.jpg"
                        alt="logo"
                        width={112}
                        height={40}
                        className="w-28 h-10 object-cover"
                    />

                    {navItems.map(({ href, label, icon }) => {
                        const active = isActive(href);

                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`group relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 active:scale-95
                                    ${active ? "text-gray-900" : "text-gray-500 hover:text-gray-900"}
                                `}
                            >
                                <span className="relative flex items-center gap-1.5">
                                    <span className="transition-transform duration-200 group-hover:scale-110 inline-block">
                                        {icon}
                                    </span>
                                    {label}
                                </span>

                                {/* underline */}
                                <span
                                    className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-orange-400 transition-transform duration-200 origin-left
                                        ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                                    `}
                                />
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile header */}
                <div className="flex md:hidden items-center justify-between py-3">
                    <Image
                        src="/images/2aOboQaz7kj8UAqPWzsVxOxj7TC9XPXGuxAv2iQ4.jpg"
                        alt="logo"
                        width={112}
                        height={40}
                        className="w-28 h-10 object-cover"
                    />

                    <button
                        ref={buttonRef}
                        onClick={() => setOpenMenu(prev => !prev)}
                        className="flex flex-col gap-1 p-2"
                    >
                        <span className="w-6 h-0.5 bg-black" />
                        <span className="w-6 h-0.5 bg-black" />
                        <span className="w-6 h-0.5 bg-black" />
                    </button>
                </div>

                {/* Mobile dropdown */}
                <div
                    ref={menuRef}
                    className={`md:hidden absolute top-full right-0 w-64 bg-white border border-gray-200 rounded-xl shadow-lg p-2 overflow-hidden transition-all duration-200
                        ${openMenu
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 -translate-y-2 pointer-events-none"
                        }
                    `}
                >
                    <div className="flex flex-col gap-1">
                        {navItems.map(({ href, label, icon }) => {
                            const active = isActive(href);

                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={() => setOpenMenu(false)}
                                    className={`group relative flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 active:scale-[0.98]
                                        ${active ? "bg-gray-50 text-gray-900" : "hover:bg-gray-50 text-gray-700"}
                                    `}
                                >
                                    <span
                                        className={`absolute left-0 top-2 bottom-2 w-0.75 rounded-full bg-blue-500 transition-transform duration-200
                                            ${active ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"}
                                        `}
                                    />

                                    <span className="text-lg transition-transform duration-200 group-hover:scale-110">
                                        {icon}
                                    </span>

                                    <span className="text-sm font-medium">
                                        {label}
                                    </span>

                                    <span className="ml-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-blue-500">
                                        →
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Back button desktop */}
            <button
                onClick={() => router.back()}
                className="absolute left-2.5 top-2.5 hidden 2xl:flex gap-2 items-center px-4 py-2 rounded-full text-sm font-medium border border-gray-200 hover:scale-105 transition"
            >
                <Image
                    src="/images/images.png"
                    alt="back"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-cover"
                />
                Back
            </button>

            {/* Scroll top */}
            {showTop && (
                <button
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="hidden 2xl:flex justify-center items-center absolute top-2 left-28 z-50 border border-gray-200 w-12 h-12 rounded-full hover:scale-110 transition rotate-90"
                >
                    <Image
                        src="/images/images.png"
                        alt="top"
                        width={24}
                        height={24}
                        className="w-6 h-6 object-cover"
                    />
                </button>
            )}
        </div>
    );
}