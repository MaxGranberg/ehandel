import Link from "next/link";
import ProductCard from "@/components/productCard";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Our Products</h1>
    <div className="grid grid-cols-2 gap-4">
      {products.map((product) => (
        <Link key={product.id} href={`/product/${product.id}`}>
          {/* Wrap each ProductCard with a Link to the dynamic product page */}
          <ProductCard name={product.name} price={product.price} />
        </Link>
      ))}
    </div>
  </div>
  );
}