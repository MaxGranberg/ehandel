"use client";

import { useCart } from "@/context/cartContext";
import Link from "next/link";

export default function CartPage() {
  const { state, dispatch } = useCart();

  const removeFromCart = (id: string) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  }

  if (state.items.length === 0) {
    return <div>Your cart is empty</div>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <ul>
        {state.items.map((product) => (
          <li key={product.id} className="mb-4">
            <h2>{product.name}</h2>
            <p>Price: {product.price} SEK</p>
            <button onClick={() => removeFromCart(product.id)} className="bg-red-500 text-white px-4 py-2 rounded">
              Remove
            </button>
          </li>
        ))}
      </ul>
      <Link href="/products">
        <p className="bg-blue-500 text-white px-4 py-2 rounded">Continue Shopping</p>
      </Link>
    </div>
  );
}