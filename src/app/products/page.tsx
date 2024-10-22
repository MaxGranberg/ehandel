"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/productCard";
import SearchBar from "@/components/searchBar";
import { fetchProducts } from "@/utils/api/fetchProducts"; // Fetch products from API

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}


export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // Empty array as initial state
  const [allProducts, setAllProducts] = useState<Product[]>([]); // Store all fetched products
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  // Fetch products when the component mounts
  useEffect(() => {
    async function loadProducts() {
      try {
        const products = await fetchProducts(); // Fetch products from the API
        setAllProducts(products); // Set all products
        setFilteredProducts(products); // Initially, show all products
      } catch (error) {
        setError("Failed to load products.");
      } finally {
        setLoading(false); // Stop loading
      }
    }
    loadProducts();
  }, []);

  // Filter products based on search input
  const handleSearch = (query: string) => {
    const trimmedQuery = query.trim().toLowerCase(); // Normalize input
    if (trimmedQuery === "") {
      setFilteredProducts(allProducts); // Show all products if search is empty
    } else {
      const filtered = allProducts.filter((product) =>
        product.title.toLowerCase().includes(trimmedQuery)
      );
      setFilteredProducts(filtered);
    }
  };

  if (loading) {
    return <p className="text-center text-gray-700">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto pb-8">
      <h1 className="text-4xl font-extrabold text-primary mb-6 text-center">
        Our Products
      </h1>

      {/* Search Bar */}
      <div className="mb-8">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="hover:scale-105 transition-transform">
              <ProductCard name={product.title} price={product.price} image={product.image} />
            </Link>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}
