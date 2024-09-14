import ProductCard from "../components/productCard";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Welcome to My E-Shop</h1>
      <p className="text-lg">This is the homepage of my e-commerce store.</p>
      <div className="grid grid-cols-2 gap-4">
        <ProductCard name="Product 1" price={99}/>
        <ProductCard name="Product 2" price={59}/>
      </div>
    </div>
  );
}
