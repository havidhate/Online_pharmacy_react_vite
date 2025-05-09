import React from "react";
import { useCart } from "../contexts/CartContext";
import { useOrder } from "../contexts/OrderContext";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { items } = useCart();
  const { placeOrder } = useOrder();
  const navigate = useNavigate();

  const total = items.reduce((sum, p) => sum + p.price * p.qty, 0);

  const handlePlaceOrder = () => {
    const orderId = placeOrder();
    navigate(`/order/${orderId}`);
  };

  if (items.length === 0)
    return (
      <div className="container mx-auto p-8 text-center">
        <h2 className="text-2xl font-semibold">Your cart is empty.</h2>
      </div>
    );

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Review Your Order</h2>
      <div className="space-y-4 mb-6">
        {items.map((p) => (
          <div
            key={p.id}
            className="flex items-center bg-white p-4 rounded shadow"
          >
            <img
              src={p.imageUrl}
              alt={p.name}
              className="w-16 h-16 object-contain mr-4"
            />
            <div className="flex-1">
              <h3 className="font-medium">{p.name}</h3>
              <p>Qty: {p.qty}</p>
            </div>
            <p className="font-semibold">₹{(p.price * p.qty).toFixed(2)}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mb-8">
        <p className="text-xl font-semibold">Total: ₹{total.toFixed(2)}</p>
        <button onClick={handlePlaceOrder} className="btn-primary px-6 py-2">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
