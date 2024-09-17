"use client";

import React, { createContext, useContext, useReducer, ReactNode, useEffect, useState } from "react";

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
  orderSummary: {
    items: CartItem[];
    total: number;
  } | null; // This will hold the snapshot of the cart items and total before clearing the cart
};

type CartAction = 
| { type: "ADD_TO_CART"; product: Product }
| { type: "REMOVE_FROM_CART"; id: string }
| { type: "DECREASE_QUANTITY"; id: string }
| { type: "LOAD_CART"; items: CartItem[] }
| { type: "SET_ORDER_SUMMARY"; orderSummary: { items: CartItem[]; total: number } }
| { type: "CLEAR_CART"; };

const CartContext = createContext<{ state: CartState; dispatch: React.Dispatch<CartAction>; cartLoaded: boolean } | undefined>(undefined);

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
    case "LOAD_CART": {
      return {
        ...state,
        items: action.items
      };
    }
    case "SET_ORDER_SUMMARY": {
      return {
        ...state,
        orderSummary: action.orderSummary, // Store the cart snapshot (items and total)
      };
    }
    case "CLEAR_CART": {
      return { ...state, items: [] }
    }
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { 
    items: [],
    orderSummary: null }); // Initialize order summary as null
  
  const [cartLoaded, setCartLoaded] = useState(false);

  // Load the cart from localStorage when the component mounts
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      dispatch({ type: "LOAD_CART", items: JSON.parse(storedCart) });
    }
    setCartLoaded(true)
   }, []);
   
  // Save the cart to localStorage whenever the cart state changes
  useEffect(() => {
    if (state.items.length > 0) {
      localStorage.setItem("cart", JSON.stringify(state.items));
    } else {
      localStorage.removeItem("cart")
    }
  }, [state.items]);

  return <CartContext.Provider value={{ state, dispatch, cartLoaded }}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}