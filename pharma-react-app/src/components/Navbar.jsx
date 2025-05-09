import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "../features/auth/useAuth";
import { useCart } from "../contexts/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { totalCount } = useCart();
  return (
    <nav className="navbar">
      <div className="navbar__container container">
        <Link to="/" className="navbar__logo">
          PharmaEase
        </Link>
        <div className="navbar__links">
          <Link to="/shop">Shop</Link>
          <Link to="/upload">Upload Rx</Link>
        </div>
        <div className="navbar__actions">
          {user && (
            <Link to="/cart" className="navbar__cart">
              <FaShoppingCart />
              {totalCount > 0 && (
                <span className="navbar__cart-count">{totalCount}</span>
              )}
            </Link>
          )}
          {user && (
            <Link to="/recommendations" className="navbar__links">
              Recommended
            </Link>
          )}
          {!user ? (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup" className="btn--primary-sm">
                Signup
              </Link>
            </>
          ) : (
            <button onClick={logout} className="btn--link">
              Logout
            </button>
          )}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
