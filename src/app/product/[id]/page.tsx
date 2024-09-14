import { products } from "@/data/products";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product= products.find((p) => p.id === params.id);

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div>
      <h1>Product Page</h1>
      <h2>{product.name}</h2>
      <p>Price: {product.price} SEK</p>
      <p>{product.description}</p>
    </div>
  );
}