import jwt from "jsonwebtoken";

export const authenticate = async (req, res, next) => {
  // getting token from headers
  const authToken = req.headers.authorization;

  // checking if the token exists or not
  if (!authToken || !authToken.startsWith("Bearer")) {
    return res
      .status(401)
      .json({ success: false, message: "No token, authorization denied" });
  }

  try {
    const token = authToken.split(" ")[1];

    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userId = decoded.id;
    req.role = decoded.role;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token is expired" });
    }
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};

export const restrict = (roles) => (req, res, next) => {
  if (!roles.includes(req.role)) {
    return res
      .status(403) // Use 403 for "Forbidden" access when roles don't match
      .json({ success: false, message: "Unauthorized access" });
  }

  next();
};
