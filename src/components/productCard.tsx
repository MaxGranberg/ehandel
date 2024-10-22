type ProductCardProps = {
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6 bg-white">
      {/* Image Placeholder */}
      <div className="bg-white w-full h-48 rounded-lg flex justify-center items-center mb-4 border-b-2">
      <img src={image} alt={name} className="h-full object-contain" />
      </div>
      {/* Product Name and Price */}
      <h2 className="text-xl font-bold text-primary mb-2">{name}</h2>
      <p className="text-lg text-accent font-semibold">{price} SEK</p>
    </div>
  );
}
