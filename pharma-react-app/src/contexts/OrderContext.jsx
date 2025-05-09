import React, { createContext, useState, useContext } from "react";
import { useCart } from "./CartContext";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const { items, clearCart } = useCart();
  const [orders, setOrders] = useState([]);

  // Create a new order
  const placeOrder = () => {
    const newOrder = {
      id: Date.now().toString(),
      items,
      status: "ordered", // ordered → out_for_delivery → delivered
      createdAt: new Date(),
    };
    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    return newOrder.id;
  };

  // Advance an order’s status (for demo / admin use)
  const advanceStatus = (orderId) =>
    setOrders((prev) =>
      prev.map((o) =>
        o.id === orderId
          ? {
              ...o,
              status:
                o.status === "ordered"
                  ? "out_for_delivery"
                  : o.status === "out_for_delivery"
                  ? "delivered"
                  : "delivered",
            }
          : o
      )
    );

  const getOrder = (orderId) => orders.find((o) => o.id === orderId);

  return (
    <OrderContext.Provider
      value={{ orders, placeOrder, advanceStatus, getOrder }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrder must be inside OrderProvider");
  return ctx;
};
