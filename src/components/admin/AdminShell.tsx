"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, LogOut, Package, ShieldCheck, Users } from "lucide-react";
import type { ReactNode } from "react";

const links = [
  { href: "/admin", label: "Tổng quan", icon: LayoutDashboard },
  { href: "/admin/users", label: "Users", icon: Users },
  { href: "/admin/products", label: "Products", icon: Package },
];

export default function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <aside className="w-full border-b border-slate-800 bg-slate-900/80 p-6 lg:w-72 lg:border-b-0 lg:border-r">
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-xl bg-emerald-500/15 p-2 text-emerald-400">
              <ShieldCheck className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">Admin Panel</p>
              <p className="text-xs text-slate-400">Quản lý storefront</p>
            </div>
          </div>

          <nav className="space-y-2">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive =
                pathname === link.href || (link.href !== "/admin" && pathname?.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                    isActive
                      ? "bg-emerald-500/15 text-emerald-300"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <Icon className="size-4" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
            <p className="text-sm font-medium">Sẵn sàng vận hành</p>
            <p className="mt-1 text-sm text-slate-400">
              Theo dõi user, sản phẩm và các hành động quản trị nhanh chóng.
            </p>
          </div>
        </aside>

        <main className="flex-1">
          <header className="border-b border-slate-800 bg-slate-900/70 px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-emerald-400">Store Administration</p>
                <h1 className="text-2xl font-semibold">Quản trị hệ thống</h1>
              </div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800"
              >
                <LogOut className="size-4" />
                Về storefront
              </Link>
            </div>
          </header>

          <div className="p-4 sm:p-6 lg:p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
