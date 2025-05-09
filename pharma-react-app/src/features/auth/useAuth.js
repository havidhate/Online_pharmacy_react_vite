// hook to access AuthContext throughout your app
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const useAuth = () => {
  return useContext(AuthContext);
};
