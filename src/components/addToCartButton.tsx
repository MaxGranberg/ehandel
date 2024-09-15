"use client";

import { useCart } from "@/context/cartContext";

type AddToCartButtonProps = {
  product: {
    id: string;
    name: string;
    price: number;
  };
};

export default function AddToCartButton( { product }: AddToCartButtonProps) {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", product });
  };

  return (
    <button onClick={addToCart} className="bg-blue-500 text-white px-4 py-2 rounded"> 
      Buy Now
    </button>
  );
}