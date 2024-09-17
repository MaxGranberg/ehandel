import { products } from "@/data/products";
import AddToCartButton from "@/components/addToCartButton";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return <div className="text-center text-xl text-red-500">Product not found</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image Placeholder */}
        <div className="bg-gray-200 w-full h-96 rounded-lg flex justify-center items-center">
          {/* Placeholder for Product Image */}
          <p className="text-gray-500">Image not available</p>
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-primary mb-4">{product.name}</h1>
            <p className="text-2xl text-accent font-semibold mb-6">{product.price} SEK</p>
            <p className="text-secondary mb-8">{product.description}</p>
          </div>

          {/* Add to Cart Button */}
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
