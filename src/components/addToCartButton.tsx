"use client";

import { useCart } from "@/context/cartContext";
import { useState } from "react";

type AddToCartButtonProps = {
  product: {
    id: string;
    name: string;
    price: number;
  };
};

export default function AddToCartButton( { product }: AddToCartButtonProps) {
  const { dispatch } = useCart();
  const [ showMessage, setShowMessage ] = useState(false);

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", product });

    //Confirmation message after adding a product to cart, hide after 3 seconds
    setShowMessage(true)
    setTimeout(() => {
      setShowMessage(false)
    }, 3000)
  };

  return (
    <div>
      <button
        onClick={addToCart}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
      >
        Add to Cart
      </button>

      {showMessage && (
        <p className="mt-2 text-green-600 font-semibold">
          Product added to cart!
        </p>
      )}
    </div>
  );
}