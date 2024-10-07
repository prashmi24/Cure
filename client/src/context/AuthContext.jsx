import { createContext, useContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";

// initial state
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  role: localStorage.getItem("role") || null,
  token: localStorage.getItem("token") || null,
  isLoading: false,
  error: null,
};

// Created auth context
export const AuthContext = createContext(initialState);

// reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state, // To preserve current state while login is in progress
        isLoading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        role: action.payload.role,
        isLoading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        role: null,
        token: null,
      };
    default:
      return state;
  }
};

// AuthContextProvider component
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Update local storage whenever authentication state changes
  useEffect(() => {
    if (state.user) {
      localStorage.setItem("user", JSON.stringify(state.user));
    } else {
      localStorage.removeItem("user");
    }

    if (state.token) {
      localStorage.setItem("token", state.token);
    } else {
      localStorage.removeItem("token");
    }

    if (state.role) {
      localStorage.setItem("role", state.role);
    } else {
      localStorage.removeItem("role");
    }
  }, [state.user, state.token, state.role]);

  // Login function
  const login = async (credentials) => {
    dispatch({ type: "LOGIN_START" });
    try {
      // Replace with your login API call
      const response = await yourLoginApi(credentials);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: response.user,
          token: response.token,
          role: response.role,
        },
      });
    } catch (error) {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: { error: error.message || "Login failed" },
      });
    }
  };

  // Logout function
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    // Optionally, you can also make an API call to invalidate the token on the server
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        token: state.token,
        role: state.role,
        isLoading: state.isLoading,
        error: state.error,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook for consuming the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// Example login API function (you need to implement this)
const yourLoginApi = async (credentials) => {
  // Make an API call to your backend for authentication
  // For example:
  // const response = await fetch('/api/login', { method: 'POST', body: JSON.stringify(credentials) });
  // const data = await response.json();
  // return data;

  // Placeholder implementation
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        credentials.email === "user@example.com" &&
        credentials.password === "password"
      ) {
        resolve({
          user: { id: 1, name: "John Doe", email: "user@example.com" },
          token: "your_jwt_token",
          role: "patient",
        });
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, 1000);
  });
};
