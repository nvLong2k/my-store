import Link from "next/link";

const stats = [
  { label: "Tổng user", value: "128", hint: "+12% so với tháng trước" },
  { label: "Sản phẩm đang hiển thị", value: "84", hint: "12 sản phẩm mới" },
  { label: "Đơn chờ xử lý", value: "19", hint: "3 cần ưu tiên" },
];

export default function AdminHomePage() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-black/20">
        <p className="text-sm text-emerald-400">Dashboard</p>
        <h2 className="mt-2 text-2xl font-semibold">Chào mừng bạn quay lại</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-400">
          Quản lý người dùng, sản phẩm và nội dung trong một nơi tập trung.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((item) => (
          <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <p className="text-sm text-slate-400">{item.label}</p>
            <p className="mt-3 text-3xl font-semibold">{item.value}</p>
            <p className="mt-2 text-sm text-emerald-400">{item.hint}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Hành động nhanh</h3>
            <span className="text-sm text-slate-400">Admin tools</span>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Link href="/admin/users" className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4 hover:border-emerald-500/50">
              <p className="font-medium">Quản lý Users</p>
              <p className="mt-1 text-sm text-slate-400">Xem và điều chỉnh tài khoản người dùng.</p>
            </Link>
            <Link href="/admin/products" className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4 hover:border-emerald-500/50">
              <p className="font-medium">Quản lý Products</p>
              <p className="mt-1 text-sm text-slate-400">Thêm, sửa và ẩn/hiện sản phẩm.</p>
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
          <h3 className="text-lg font-semibold">Thông báo gần đây</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">Có 3 user mới đăng ký trong 24h.</li>
            <li className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">2 sản phẩm cần cập nhật hình ảnh.</li>
            <li className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">Đã mở bản cập nhật cấu hình admin.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
