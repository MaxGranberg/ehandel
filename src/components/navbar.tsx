"use client";

import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCart } from "@/context/cartContext";

export default function Navbar() {
  const { state, cartLoaded } = useCart();
  const totalItemsInCart = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-primary p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <Link href="/" className="text-white font-extrabold text-2xl tracking-tight">
          My E-Shop
        </Link>

        {/* Navigation Links */}
        <div className="space-x-8 text-lg font-semibold">
          <Link href="/products" className="text-white hover:text-gray-300 transition-colors">
            Products
          </Link>
        </div>

        {/* Cart Icon */}
        <Link href="/cart" className="relative flex items-center text-white">
          <ShoppingCartIcon className="h-8 w-8" />

          {/* Display the cart count only when the cart is loaded and has items */}
          {cartLoaded && totalItemsInCart > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-sm font-bold rounded-full h-6 w-6 flex items-center justify-center">
              {totalItemsInCart}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
