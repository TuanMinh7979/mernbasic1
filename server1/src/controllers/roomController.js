import Room from "../models/room.js";

import { createError } from "../utils/errorUtil.js";

export const createRoom = async (req, res, next) => {
  const RoomId = req.params.Roomid;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await Room.findByIdAndUpdate(RoomId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("savedRoom");
  } catch (err) {
    next(err);
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      //return updated model
      { new: true }
    );
    if (updatedRoom === null)
      return next(createError(404, "Khong tim thay Room roi"));
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};
export const deleteRoom = async (req, res, next) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    res.status(200).json("Room deleted");
  } catch (err) {
    next(err);
  }
};
export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    if (room === null) return next(createError(404, "Khong tim thay Room"));
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

export const getAllRoom = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};
