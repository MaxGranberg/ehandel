"use client";

import { useCart } from "@/context/cartContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { state, cartLoaded, dispatch } = useCart();
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (cartLoaded && state.items.length === 0 && !orderSubmitted) {
      router.push("/cart");
    }
  }, [state.items, router, cartLoaded, orderSubmitted]);

  const [userInfo, setUserInfo] = useState({
    name: "",
    address: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const totalPrice = state.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );

    dispatch({ type: "SET_ORDER_SUMMARY", orderSummary: { items: state.items, total: totalPrice } });
    setOrderSubmitted(true);
    dispatch({ type: "CLEAR_CART" });
  };

  const totalPriceBeforeCheckout = state.items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  if (!cartLoaded) {
    return <div>Loading...</div>;
  }

  if (state.items.length === 0 && !orderSubmitted) {
    return <div className="text-center text-xl text-gray-600">Your cart is empty</div>;
  }

  if (orderSubmitted) {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-extrabold text-primary mb-8 text-center">Order Confirmation</h1>
        <p className="text-xl text-center mb-4">Thank you for your order, {userInfo.name}!</p>
        <p className="text-lg text-center mb-4">Your order has been successfully submitted.</p>
        
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <ul className="space-y-2">
            {state.orderSummary.items.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{item.product.name}</span>
                <span>(x{item.quantity}) - {item.product.price} SEK</span>
              </li>
            ))}
          </ul>
          <div className="text-xl font-bold mt-4">
            Total: {state.orderSummary.total.toFixed(2)} SEK
          </div>
          <p className="mt-4">We will send a confirmation email to {userInfo.email} shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-extrabold text-primary mb-8 text-center">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <ul className="space-y-2">
            {state.items.map((item) => (
              <li key={item.product.id} className="flex justify-between">
                <span>{item.product.name}</span>
                <span>(x{item.quantity}) - {item.product.price} SEK</span>
              </li>
            ))}
          </ul>
          <div className="text-xl font-bold mt-4">
            Total: {totalPriceBeforeCheckout.toFixed(2)} SEK
          </div>
        </div>

        {/* User Information Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userInfo.name}
              onChange={handleInputChange}
              required
              className="border border-gray-300 p-3 w-full rounded-lg"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium mb-2">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={userInfo.address}
              onChange={handleInputChange}
              required
              className="border border-gray-300 p-3 w-full rounded-lg"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              required
              className="border border-gray-300 p-3 w-full rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full transition-colors"
          >
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
}
