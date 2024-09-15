"use client";

import React, { createContext, useContext, useReducer, ReactNode } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
};

type CartItem = {
  product: Product;
  quantity: number;
}

type CartState = {
  items: CartItem[];
}

type CartAction = 
| { type: "ADD_TO_CART"; product: Product }
| { type: "REMOVE_FROM_CART"; id: string }
| { type: "DECREASE_QUANTITY"; id: string}

const CartContext = createContext<{ state: CartState; dispatch: React.Dispatch<CartAction> } | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.items.find((item) => item.product.id === action.product.id)
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.product.id === action.product.id
              ? { ...item, quantity: item.quantity + 1}
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { product: action.product, quantity: 1}],
        };
      }
    }
    case "REMOVE_FROM_CART": {
      return { ...state, items: state.items.filter((item) => item.product.id !== action.id) };
    }
    case "DECREASE_QUANTITY": {
      const existingItems = state.items.find((item) => item.product.id === action.id)
      if (existingItems && existingItems.quantity > 1) {
        return {
          ...state,
          items: state.items.map((item) => 
            item.product.id === action.id
              ? { ...item, quantity: item.quantity - 1}
              : item
          ),
        };
      } else {
        // if only one item left, remove it
        return {
          ...state,
          items: state.items.filter((item) => item.product.id !== action.id),
        };
      }
    }
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