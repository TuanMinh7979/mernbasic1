import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
  updateHotel,
  countByCity,
  countByType,
} from "../controllers/hotelController.js";
import { checkAdmin, checkToken } from "../utils/checkToken.js";

const router = express.Router();
//get

//api test custom err localhost:8800/api/hotels/634a3005813f9c000eaa4065

//home page khong can dang nhap van xem duoc

//getall
router.get("/", getAllHotel);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/:id", getHotel);
// router.get("/countByType", getHotels);
//PHAI DUNG THU TU USER THONG THUONG CHI CO THE GET HOTEL
//CHU KHONG CO QUYEN THEM SUA XOA

//create
router.use(checkToken);
router.use(checkAdmin);
router.post("/", createHotel);

//update
router.put("/:id", updateHotel);
//delete

router.delete("/:id", deleteHotel);

export default router;
