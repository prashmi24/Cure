import jwt from "jsonwebtoken";

export const authenticate = async (req, res, next) => {
  // getting token from headers or query parameter
  const authToken = req.headers.authorization || req.query.token;

  // checking if the token exists or not
  if (!authToken || !authToken.startsWith("Bearer")) {
    return res
      .status(401)
      .json({ success: false, message: "Token missing or invalid" });
  }

  try {
    const token = authToken.split(" ")[1];

    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userId = decoded.id;
    req.role = decoded.role;
    next();
  } catch (error) {
    const message =
      error.name === "TokenExpiredError"
        ? "Authentication failed"
        : "Invalid token";
    return res.status(401).json({ success: false, message });
  }
};

// Restrict access to specific roles
export const restrict = (roles) => (req, res, next) => {
  if (!roles.includes(req.role)) {
    return res
      .status(403)
      .json({ success: false, message: "Unauthorized access" });
  }

  next();
};
