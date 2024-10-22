import AddToCartButton from "@/components/addToCartButton";

// Fetch product details from the FakeStore API
export default async function ProductPage({ params }: { params: { id: string } }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();

  if (!product) {
    return <div className="text-center text-xl text-red-500">Product not found</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-white w-full h-96 rounded-lg flex justify-center items-center border">
          <img src={product.image} alt={product.title} className="h-full object-contain" />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-primary mb-4">{product.title}</h1>
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
