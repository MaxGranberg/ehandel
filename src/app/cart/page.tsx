"use client";

import { useCart } from "@/context/cartContext";
import Link from "next/link";

export default function CartPage() {
  const { state, dispatch } = useCart();

  const removeFromCart = (id: string) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  }

  const decreaseQuantity = (id: string) => {
    dispatch({ type: "DECREASE_QUANTITY", id });
  }

  if (state.items.length === 0) {
    return <div>Your cart is empty</div>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <ul>
        {state.items.map((item) => (
          <li key={item.product.id} className="mb-4">
            <h2>{item.product.name}</h2>
            <p>Price: {item.product.price} SEK</p>
            <p>Quantity: {item.quantity}</p>
            <div className="flex gap-4">
              <button onClick={() => decreaseQuantity(item.product.id)} className="bg-yellow-500 text-white px-3 py-2 rounded">
                Decrease quantity
              </button>
            <button onClick={() => removeFromCart(item.product.id)} className="bg-red-500 text-white px-4 py-2 rounded">
              Remove
            </button>
            </div>
          </li>
        ))}
      </ul>
      <Link href="/products">
        <p className="bg-blue-500 text-white px-4 py-2 rounded">Continue Shopping</p>
      </Link>
    </div>
  );
}