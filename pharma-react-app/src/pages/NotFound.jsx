import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => (
  <>
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold mb-4">404 – Page Not Found</h2>
      <Link to="/" className="text-blue-500 hover:underline">
        Return Home
      </Link>
    </div>
  </>
);

export default NotFound;
