import express from "express";
import {
  createRoom,
  deleteRoom,
  getAllRoom,
  getRoom,
  updateRoom,
} from "../controllers/roomController.js";
import { checkAdmin, checkToken } from "../utils/checkToken.js";

const router = express.Router();
//get
router.get("/:id", getRoom);

//getall
router.get("/", getAllRoom);

//admin can do that

router.use(checkToken);
router.use(checkAdmin);
//create
router.post("/:hotelid", createRoom);

//update
router.put("/:id", updateRoom);
//delete

router.delete("/:id", deleteRoom);

export default router;
