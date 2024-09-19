"use client";

import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCart } from "@/context/cartContext";
import NavbarSearchBar from "./navbarSearchBar";

export default function Navbar() {
  const { state, cartLoaded } = useCart();
  const totalItemsInCart = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 py-3 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        
        {/* Logo / Brand */}
        <Link href="/" className="text-white font-extrabold text-2xl tracking-tight hover:text-gray-300 transition duration-300">
          My E-Shop
        </Link>

        {/* Navigation Links - Hidden on small screens */}
        <div className="hidden md:flex space-x-8 text-lg font-semibold">
          <Link href="/products" className="text-white hover:text-gray-300 transition-colors duration-300">
            Products
          </Link>
        </div>

        {/* Flex container for search bar and cart icon */}
        <div className="flex items-center space-x-6">
          {/* Searchbar */}
          <div className="w-full md:w-64">
            <NavbarSearchBar />
          </div>

          {/* Cart Icon */}
          <Link href="/cart" className="relative flex items-center text-white">
            <ShoppingCartIcon className="h-7 w-7 hover:text-gray-300 transition duration-300" />
            {/* Display the cart count only when the cart is loaded and has items */}
            {cartLoaded && totalItemsInCart > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItemsInCart}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
