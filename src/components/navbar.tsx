"use client";

import Link from "next/link";
import { useCart } from "@/context/cartContext";

export default function Navbar() {

  const { state } = useCart();

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
        <p className="text-white"> Cart ({state.items.length})</p>
        </Link>
      </div>
    </nav>
  );
}