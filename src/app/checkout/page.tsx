"use client"

import { useCart } from "@/context/cartContext"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";

export default function ChekoutPage() {
  const { state, cartLoaded, dispatch } = useCart();
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (cartLoaded && state.items.length === 0 &&!orderSubmitted) {
      router.push("/cart");
    }
  }, [state.items, router, cartLoaded, orderSubmitted]);

  //Form state to collecty user information
  const [userInfo, setUserInfo] = useState({
    name: "",
    address: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const totalPrice = state.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );

    dispatch({ type: "SET_ORDER_SUMMARY", orderSummary: { items: state.items, total: totalPrice } });

    setOrderSubmitted(true)

    dispatch({ type: "CLEAR_CART" });
  }

  const totalPriceBeforeChekout = state.items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  // Handle the loading state while the cart is being fetched
  if (!cartLoaded) {
    return <div>Loading...</div>;
  }

  // Handle empty cart after the cart is loaded
  if (state.items.length === 0 && !orderSubmitted) {
    return <div>Your cart is empty.</div>;
  }

  if (orderSubmitted) {
    return (
      <div className=" container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Order Confirmation</h1>
        <p>Thank you for your order, {userInfo.name}!</p>
        <p>Your order has been succesfully submitted.</p>
        <h2 className="text-xl font-semibold mt-4">Order summary:</h2>
        <ul>
          {state.orderSummary.items.map((item, index) => (
            <li key={index} className="mb-2">
              {item.product.name} - (x{item.quantity}) - {item.product.price} SEK each
            </li>
          ))}
        </ul>
        <p className="font-bold mt-2">Total: {state.orderSummary.total.toFixed(2)} SEK</p>
        <p>We will send a confirmation e-mail to {userInfo.email} shortly.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4"> Checkout</h1>

      {/*Order summary*/}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Order summary</h2>
        <ul>
          {state.items.map((item) => (
            <li key={item.product.id} className="mb-2">
              {item.product.name} (x{item.quantity}) - {item.product.price} SEK each
            </li>
          ))}
        </ul>
        <p className="font-bold mt-2">Total: {totalPriceBeforeChekout.toFixed(2)} SEK</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={userInfo.name}
            onChange={handleInputChange}
            required
            className="border p-2 w-full text-black"
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={userInfo.address}
            onChange={handleInputChange}
            required
            className="border p-2 w-full text-black"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
            required
            className="border p-2 w-full text-black"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
}