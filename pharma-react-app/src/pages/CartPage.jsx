// import React from "react";
// import { useCart } from "../contexts/CartContext";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const CartPage = () => {
//   const { items, removeFromCart, clearCart } = useCart();

//   const total = items.reduce((sum, p) => sum + p.price * p.qty, 0);

//   return (
//     <>
//       <main className="container mx-auto px-4 py-8">
//         <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
//         {items.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <div className="space-y-4">
//             {items.map((p) => (
//               <div
//                 key={p.id}
//                 className="flex items-center bg-white p-4 rounded shadow"
//               >
//                 <img
//                   src={p.imageUrl}
//                   alt={p.name}
//                   className="w-16 h-16 object-contain mr-4"
//                 />
//                 <div className="flex-1">
//                   <h3 className="font-medium">{p.name}</h3>
//                   <p>Qty: {p.qty}</p>
//                 </div>
//                 <p className="font-semibold">₹{(p.price * p.qty).toFixed(2)}</p>
//                 <button
//                   onClick={() => removeFromCart(p.id)}
//                   className="ml-4 text-red-500 hover:underline"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//             <div className="flex justify-between items-center mt-6">
//               <button onClick={clearCart} className="btn--link">
//                 Clear Cart
//               </button>
//               <p className="text-lg font-semibold">
//                 Total: ₹{total.toFixed(2)}
//               </p>
//             </div>
//             <button className="btn-primary mt-4">Proceed to Checkout</button>
//           </div>
//         )}
//       </main>
//     </>
//   );
// };

// export default CartPage;

// src/pages/CartPage.jsx
import React from "react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CartPage = () => {
  const { items, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = items.reduce((sum, p) => sum + p.price * p.qty, 0);

  const handleCheckout = () => {
    if (items.length === 0) return; // guard
    navigate("/checkout"); // go to checkout page
  };

  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>

        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
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
                <button
                  onClick={() => removeFromCart(p.id)}
                  className="ml-4 text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="flex justify-between items-center mt-6">
              <button onClick={clearCart} className="btn--link">
                Clear Cart
              </button>
              <p className="text-lg font-semibold">
                Total: ₹{total.toFixed(2)}
              </p>
            </div>

            <button
              onClick={handleCheckout}
              disabled={items.length === 0}
              className={`btn-primary mt-4 w-full text-center ${
                items.length === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </main>
    </>
  );
};

export default CartPage;
