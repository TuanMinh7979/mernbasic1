import User from "../models/User.js";
import { createError } from "../utils/errorUtil.js";
import bcrypt from "bcryptjs";
export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    await newUser.save();
    res.status(200).send("user created successfully");
  } catch (err) {
    next(err);
  }
};
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user)
      return next(createError(404, "wrong username or password(username)"));

    console.log(req.body, user.password);
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(404, "wrong username or password(pass)"));

    res.status(200).send("login success");
  } catch (err) {
    next(err);
  }
};
