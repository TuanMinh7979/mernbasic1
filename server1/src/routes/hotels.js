import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
  updateHotel,
} from "../controllers/hotelController.js";

const router = express.Router();
//create
router.post("/", createHotel);

//update
router.put("/:id", updateHotel);
//delete

router.delete("/:id", deleteHotel);

//get

//api test custom err localhost:8800/api/hotels/634a3005813f9c000eaa4065
router.get("/:id", getHotel);

//getall
router.get("/", getAllHotel);

export default router;
