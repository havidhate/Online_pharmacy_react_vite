import React, { createContext } from "react";
import { notify } from "../components/Notifications/ToastProvider";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const success = (msg) => notify(msg, { type: "success" });
  const error = (msg) => notify(msg, { type: "error" });
  const info = (msg) => notify(msg, { type: "info" });

  return (
    <NotificationContext.Provider value={{ success, error, info }}>
      {children}
    </NotificationContext.Provider>
  );
};
