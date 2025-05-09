import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "./useAuth";
import { Link, useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required(),
  password: yup.string().min(6, "Min 6 chars").required(),
});

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      navigate("/shop");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="auth-card">
      <h2 className="auth-title">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
        <div className="form-group">
          <label>Email</label>
          <input type="email" {...register("email")} className="form-input" />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            {...register("password")}
            className="form-input"
          />
          {errors.password && (
            <p className="form-error">{errors.password.message}</p>
          )}
        </div>
        <button type="submit" disabled={isSubmitting} className="btn-primary">
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
      <p className="auth-footer">
        New here?{" "}
        <Link to="/signup" className="link-secondary">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
