import jwt from "jsonwebtoken";
import { createError } from "./errorUtil.js";

export const checkToken = (req, res, next) => {
  console.log("------", req.cookies);
  const token = req.cookies.access_token;
  if (!token) {
    next(createError(401, "Authenticated failed"));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(createError(403, "Authenticated failed2"));
    req.user = user;
    next(err);
  });
};
