"use client"

import Link from "next/link";
import { useState } from "react";
import ProductCard from "@/components/productCard";
import { products } from "@/data/products";
import SearchBar from "@/components/searchBar";

export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState(products)

  // Filter products based ons erach input
  const handleSearch = (query: string) => {
    const trimmedQuery = query.trim(); // Remove leading and trailing whitespaces
    
    if (trimmedQuery === "") {
      setFilteredProducts(products); // Show all products if the search is empty
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(trimmedQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };
  


  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-extrabold text-primary mb-6 text-center">
        Our Products
      </h1>

      {/*Searchbar */}
      <div className="mb-8">
      <SearchBar onSearch={handleSearch}></SearchBar>
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="hover:scale-105 transition-transform">
              <ProductCard name={product.name} price={product.price} />
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
