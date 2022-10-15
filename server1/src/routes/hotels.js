import express from "express";
import Hotel from "../models/Hotel.js";
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
router.get("/:id", async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (hotel === null) return next(new Error("bi null"));
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
