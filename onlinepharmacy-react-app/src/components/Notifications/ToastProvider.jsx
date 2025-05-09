// src/components/Notifications/ToastProvider.jsx
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notify = (msg, opts) => toast(msg, opts);

const ToastProvider = ({ children }) => (
  <>
    {children}
    <ToastContainer position="top-right" autoClose={3000} />
  </>
);

export default ToastProvider;
