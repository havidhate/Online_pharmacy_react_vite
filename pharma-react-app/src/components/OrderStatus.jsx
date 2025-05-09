import React from "react";
import { useOrder } from "../contexts/OrderContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const steps = [
  { key: "ordered", label: "Order Placed" },
  { key: "out_for_delivery", label: "Out for Delivery" },
  { key: "delivered", label: "Delivered" },
];

const OrderStatus = () => {
  const { id } = useParams();
  const { getOrder, advanceStatus } = useOrder();
  const order = getOrder(id);
  const navigate = useNavigate();

  if (!order)
    return (
      <div className="container mx-auto p-8 text-center">
        <h2 className="text-2xl text-red-500">Order Not Found</h2>
      </div>
    );

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6">Order #{order.id}</h2>

      <ul className="flex justify-between mb-8">
        {steps.map((s) => {
          const done =
            steps.findIndex((st) => st.key === order.status) >=
            steps.findIndex((st) => st.key === s.key);
          return (
            <li key={s.key} className="flex-1 text-center">
              <div
                className={`mx-auto w-8 h-8 rounded-full flex items-center justify-center ${
                  done ? "bg-green-500 text-white" : "bg-gray-300 text-gray-600"
                }`}
              >
                {done ? "✔" : steps.findIndex((st) => st.key === s.key) + 1}
              </div>
              <p className="mt-2 text-sm">{s.label}</p>
            </li>
          );
        })}
      </ul>

      {/* For demo/admin: advance status */}
      <div className="text-center">
        {order.status !== "delivered" && (
          <button
            onClick={() => advanceStatus(order.id)}
            className="btn-primary px-4 py-2"
          >
            Mark “{steps.find((s) => s.key === order.status).label}” Done
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderStatus;
