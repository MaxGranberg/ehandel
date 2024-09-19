"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { products } from "@/data/products";
import { Product } from "@/types/product";

export default function NavbarSearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  // Handle search input and display suggestions
  const handleSearch = (query: string) => {
    const trimmedQuery = query.trim().toLowerCase();
    if (trimmedQuery === "") {
      setSuggestions([]);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(trimmedQuery)
      );
      setSuggestions(filtered);
      setIsDropdownOpen(true); // Open dropdown if suggestions exist
    }
  };

  // Handle selecting a product from the dropdown
  const handleSelectProduct = (productId: string) => {
    setSearchTerm("");
    setSuggestions([]);
    setIsDropdownOpen(false); // Close dropdown
    router.push(`/product/${productId}`);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Clear search input when route changes
  useEffect(() => {
    setSearchTerm("");
    setSuggestions([]);
    setIsDropdownOpen(false); // Ensure dropdown closes
  }, [pathname]);

  return (
    <div className="relative w-full md:w-64" ref={dropdownRef}>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleSearch(e.target.value);
        }}
        className="p-2 w-full text-gray-700 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
      />

      {/* Dropdown with suggestions */}
      {isDropdownOpen && suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white border border-gray-300 mt-1 rounded-lg w-full max-h-60 overflow-y-auto shadow-lg">
          {suggestions.map((product) => (
            <li
              key={product.id}
              onClick={() => handleSelectProduct(product.id)}
              className="p-3 cursor-pointer hover:bg-gray-100 transition-all"
            >
              {product.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}