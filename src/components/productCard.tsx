type ProductCardProps = {
  name: string;
  price: number;
}

export default function ProductCard({ name, price}: ProductCardProps) {
  return (
    <div className="border p-4 rounded-md">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-sm text-gray-600">{price} SEK</p>
    </div>
  )
}