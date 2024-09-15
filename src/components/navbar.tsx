import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <p className="text-white font-bold text-lg"> My E-shop</p>
        </Link>
        <Link href="/products">
          <p className="text-white"> Products</p>
        </Link>
        <Link href="/cart">
        <p className="text-white"> Cart</p>
        </Link>
      </div>
    </nav>
  );
}