// src/pages/LiveChatPage.jsx
import React from "react";
import LiveChatWidget from "../components/Chat/LiveChatWidget";

const LiveChatPage = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Live Chat Support</h1>
    <LiveChatWidget />
  </div>
);

export default LiveChatPage;
