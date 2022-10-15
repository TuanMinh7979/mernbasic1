import jwt from "jsonwebtoken";
import { createError } from "./errorUtil.js";

export const checkToken = (req, res, next) => {
  // console.log( req.cookies);
  console.log("----------------checktoken now");
  const token = req.cookies.access_token;
  if (!token) {
    next(createError(401, "Authenticated failed"));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) return next(createError(403, "Authenticated failed2"));
    req.user = payload;
    next(err);
  });
};

export const checkAdmin = (req, res, next) => {
  checkToken(req, res, () => {
    console.log(">>>>>>>payload user store in request req.user", req.user);

    if (req.user && req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not a admin"));
    }
  });
};
