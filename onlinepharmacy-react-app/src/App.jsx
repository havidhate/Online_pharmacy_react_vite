import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import ToastProvider from "./components/Notifications/ToastProvider";
import AppRouter from "./routes/AppRouter";
import "./hooks/usePWARegistration"; // ensure this hook has no SW code, or remove it

const App = () => (
  <AuthProvider>
    <CartProvider>
      <NotificationProvider>
        <ToastProvider>
          <AppRouter />
        </ToastProvider>
      </NotificationProvider>
    </CartProvider>
  </AuthProvider>
);

export default App;
