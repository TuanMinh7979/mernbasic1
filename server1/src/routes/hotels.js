import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
  updateHotel,
} from "../controllers/hotelController.js";
import { checkAdmin } from "../utils/checkToken.js";

const router = express.Router();
//get

//api test custom err localhost:8800/api/hotels/634a3005813f9c000eaa4065
router.get("/:id", getHotel);

//getall
router.get("/", getAllHotel);

//PHAI DUNG THU TU USER THONG THUONG CHI CO THE GET HOTEL
//CHU KHONG CO QUYEN THEM SUA XOA
router.use(checkAdmin);
//create
router.post("/", createHotel);

//update
router.put("/:id", updateHotel);
//delete

router.delete("/:id", deleteHotel);

export default router;
