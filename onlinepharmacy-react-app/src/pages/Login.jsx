import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await login(email, pw);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={submit} className="grid gap-4 max-w-md">
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-teal-600 text-white rounded"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
