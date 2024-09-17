"use client";

import { useCart } from "@/context/cartContext";
import Link from "next/link";

export default function CartPage() {
  const { state, dispatch, cartLoaded } = useCart();

  const removeFromCart = (id: string) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  }

  const increaseQuantity = (id: string) => {
    const product = state.items.find(item => item.product.id === id)?.product;
    if (product) {
      dispatch({ type: "ADD_TO_CART", product});
    }
  };

  const decreaseQuantity = (id: string) => {
    dispatch({ type: "DECREASE_QUANTITY", id });
  }

  const totalPrice = state.items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  if (!cartLoaded) {
    return <div>Loading...</div>
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
              <button onClick={() => increaseQuantity(item.product.id)} className="bg-green-500 text-white px-2 py-2 rounded">
                Increase quantity
              </button>
            <button onClick={() => removeFromCart(item.product.id)} className="bg-red-500 text-white px-4 py-2 rounded">
              Remove
            </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="text-xl font-bold mt-4">
        Total price: {totalPrice.toFixed(2)} SEK
      </div>

      <div className="grid column">
      <Link href="/checkout">
        <p className="bg-green-500 text-white px-4 py-2 rounded mt-4 inline-block">Proceed to chekout</p>
      </Link>

      <Link href="/products">
        <p className=" mt-4 bg-blue-500 text-white px-4 py-2 rounded inline-block">Continue Shopping</p>
      </Link>
      </div>
    </div>
  );
}