"use client";

import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCart } from "@/context/cartContext";

export default function Navbar() {

  const { state, cartLoaded } = useCart();

  const totalItemsInCart = state.items.reduce((total, item) => total + item.quantity, 0)

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
          <p className="text-white relative flex items-center">
            <ShoppingCartIcon className="h-6 w-6 text-white" />

            {/* Display the cart count only when the cart is loaded */}
            {cartLoaded && totalItemsInCart > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItemsInCart}
              </span>
            )}

          </p>
        </Link>
      </div>
    </nav>
  );
}