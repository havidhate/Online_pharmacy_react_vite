import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { toggleTheme } = useTheme();
  const { token, logout } = useAuth();

  return (
    <nav>
      {token && (
        <>
          <Link to="/">Skills</Link>
          <Link to="/sprints">Sprints</Link>
          <button onClick={logout}>Logout</button>
        </>
      )}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  );
}
