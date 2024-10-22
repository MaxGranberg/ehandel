"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useCart } from "@/context/cartContext";
import NavbarSearchBar from "./navbarSearchBar";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state, cartLoaded } = useCart();
  const totalItemsInCart = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 py-3 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center space-x-6">

        {/* Logo / Brand */}
        <Link href="/" className="text-white font-extrabold text-2xl tracking-tight hover:text-gray-300 transition duration-300">
          My E-Shop
        </Link>

        {/* Navigation Links for larger screens */}
        <div className="hidden md:flex space-x-8 text-lg font-semibold">
          <Link href="/products" className="text-white hover:text-gray-300 transition-colors duration-300">
            Products
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300 transition-colors duration-300">
            About Us
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300 transition-colors duration-300">
            Contact
          </Link>
        </div>

        {/* Flex container for search bar and cart icon */}
        <div className="flex items-center space-x-6">

          {/* Searchbar */}
          <div className="w-full md:w-auto">
            <NavbarSearchBar />
          </div>

          {/* Cart Icon */}
          <Link href="/cart" className="relative flex items-center text-white">
            <ShoppingCartIcon className="h-7 w-7 hover:text-gray-300 transition duration-300" />
            {cartLoaded && totalItemsInCart > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItemsInCart}
              </span>
            )}
          </Link>

          {/* Hamburger Icon for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-7 w-7" />
              ) : (
                <Bars3Icon className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white py-3 space-y-4">
          <Link href="/products" className="block text-lg font-semibold hover:text-gray-300 transition-colors duration-300 text-center">
            Products
          </Link>
          <Link href="/about" className="block text-lg font-semibold hover:text-gray-300 transition-colors duration-300 text-center">
            About Us
          </Link>
        </div>
      )}
    </nav>
  );
}
