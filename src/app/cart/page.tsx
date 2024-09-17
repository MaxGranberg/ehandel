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
    return <div className="text-center text-xl text-gray-600">Your cart is empty</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-extrabold text-primary mb-8 text-center">Shopping Cart</h1>
      
      {/* Cart Items */}
      <ul className="space-y-6">
        {state.items.map((item) => (
          <li key={item.product.id} className="flex flex-col md:flex-row items-center justify-between bg-white shadow-lg p-6 rounded-lg">
            {/* Product Info */}
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="bg-gray-200 w-24 h-24 rounded-lg flex justify-center items-center">
                <p className="text-gray-500">Image not available</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-primary">{item.product.name}</h2>
                <p className="text-lg text-accent font-semibold">{item.product.price} SEK</p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <button
                  onClick={() => decreaseQuantity(item.product.id)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-4 py-2 rounded-l-lg"
                >
                  -
                </button>
                <span className="px-6 py-2 text-gray-700">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.product.id)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-4 py-2 rounded-r-lg"
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.product.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Total Price */}
      <div className="text-2xl font-bold text-right mt-8">
        Total price: {totalPrice.toFixed(2)} SEK
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-8">
        <Link href="/products">
          <p className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
            Continue Shopping
          </p>
        </Link>

        <Link href="/checkout">
          <p className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg">
            Proceed to Checkout
          </p>
        </Link>
      </div>
    </div>
  );
}