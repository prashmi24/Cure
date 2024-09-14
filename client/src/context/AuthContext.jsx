import { createContext, useContext, useEffect, useReducer } from "react";

// Defined initial state for authentication context
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  role: localStorage.getItem("role") || null,
  token: localStorage.getItem("token") || null,
};

// Created authentication context
export const AuthContext = createContext(initialState);

// Defined authentication reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state, // To preserve current state while login is in progress
        user: null,
        role: null,
        token: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload.user,
        token: action.payload.token,
        role: action.payload.role,
      };
    case "LOGOUT":
      // Clear localStorage on logout to prevent stale data
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      return {
        user: null,
        role: null,
        token: null,
      };
    default:
      return state;
  }
};

// AuthContextProvider component to provide authentication context to children
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Update local storage whenever authentication state changes
  useEffect(() => {
    if (state.user) {
      localStorage.setItem("user", JSON.stringify(state.user));
    }
    if (state.token) {
      localStorage.setItem("token", state.token);
    }
    if (state.role) {
      localStorage.setItem("role", state.role);
    }
  }, [state.user, state.token, state.role]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        token: state.token,
        role: state.role,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
