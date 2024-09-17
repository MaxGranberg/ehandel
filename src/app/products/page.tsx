import Link from "next/link";
import ProductCard from "@/components/productCard";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-extrabold text-primary mb-8 text-center">
        Our Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`} className="hover:scale-105 transition-transform">
            <ProductCard name={product.name} price={product.price} />
          </Link>
        ))}
      </div>
    </div>
  );
}
