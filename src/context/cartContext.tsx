"use client";

import React, { createContext, useContext, useReducer, ReactNode } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
};

type CartState = {
  items: Product[];
}

type CartAction = { type: "ADD_TO_CART"; product: Product } | { type: "REMOVE_FROM_CART"; id: string };

const CartContext = createContext<{ state: CartState; dispatch: React.Dispatch<CartAction> } | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, items: [...state.items, action.product] };
    case "REMOVE_FROM_CART":
      return { ...state, items: state.items.filter((item) => item.id !== action.id) };
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}