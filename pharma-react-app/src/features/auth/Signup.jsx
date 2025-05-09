import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "./useAuth";
import { Link, useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required(),
  password: yup.string().min(6, "Min 6 chars").required(),
  confirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required(),
});

const Signup = () => {
  const { signup } = useAuth();
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
      await signup(data.email, data.password);
      navigate("/shop");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="auth-card">
      <h2 className="auth-title">Sign Up</h2>
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
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            {...register("confirm")}
            className="form-input"
          />
          {errors.confirm && (
            <p className="form-error">{errors.confirm.message}</p>
          )}
        </div>
        <button type="submit" disabled={isSubmitting} className="btn-primary">
          {isSubmitting ? "Signing up..." : "Sign Up"}
        </button>
      </form>
      <p className="auth-footer">
        Already have an account?{" "}
        <Link to="/login" className="link-secondary">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
