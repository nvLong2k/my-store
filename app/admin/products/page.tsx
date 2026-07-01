const products = [
  { id: 1, name: "Premium Tote Bag", stock: 24, price: "$49", status: "Published" },
  { id: 2, name: "Classic Hoodie", stock: 8, price: "$89", status: "Draft" },
  { id: 3, name: "Travel Bottle", stock: 35, price: "$29", status: "Published" },
];

export default function AdminProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-emerald-400">Products</p>
          <h2 className="text-2xl font-semibold">Danh sách sản phẩm</h2>
        </div>
        <button className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-emerald-400">
          + Thêm sản phẩm
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold">{product.name}</h3>
                <p className="mt-1 text-sm text-slate-400">Tồn kho: {product.stock}</p>
              </div>
              <span className={`rounded-full px-2.5 py-1 text-xs ${product.status === "Published" ? "bg-emerald-500/15 text-emerald-300" : "bg-amber-500/15 text-amber-300"}`}>
                {product.status}
              </span>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-lg font-semibold">{product.price}</p>
              <button className="text-sm text-emerald-400 hover:text-emerald-300">Chỉnh sửa</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
