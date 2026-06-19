import { products } from "@/mock/products";
import { catalogProducts } from "@/mock/catalog";
import Product from "@/components/Product";
import Catalog from "@/components/Catalog";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <main>
        <h1 className="text-4xl font-semibold mt-4 mb-4">
          Made in USA
        </h1>

        {products.length > 0 &&
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
              />
            ))}
          </div>
        }

        <h1 className="text-4xl font-semibold mt-12 mb-4">
          Made in Vietnam
        </h1>

        {catalogProducts.length > 0 &&
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {catalogProducts.map((product) => (
              <Catalog
                key={product.id}
                product={product}
              />
            ))}
          </div>
        }
      </main>
    </div>
  );
}