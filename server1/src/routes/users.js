import express from "express";
import jwt from "jsonwebtoken";
const { verify } = jwt;

import {
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "../controllers/UserController.js";
import { checkToken } from "../utils/checkToken.js";

const router = express.Router();

router.get("/checkauthen", checkToken, (req, res, next) => {
  res.send("authensuccess");
});
//update
router.put("/:id", updateUser);
//delete

router.delete("/:id", deleteUser);

//get

router.get("/:id", getUser);

//getall
router.get("/", getAllUser);
export default router;
