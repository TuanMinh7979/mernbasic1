import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/errorUtil.js";
const router = express.Router();
//create
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update
router.put("/:id", async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      //return updated model
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});
//delete

router.delete("/:id", async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//get

//api test custom err localhost:8800/api/hotels/634a3005813f9c000eaa4065
router.get("/:id", async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (hotel === null) return next(createError(404, "bi null r kkk"));
    res.status(200).json(hotel);
  } catch (err) {
    // res.status(500).json(err);
    return next(err);
  }
});

//getall
router.get("/", async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    // res.status(500).json(err);
    next(err);
  }
});

export default router;
