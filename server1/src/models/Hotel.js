import mongoose from "mongoose";
const { Schema } = mongoose;

const HotelSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  distance: { type: String, required: true },
  photos: { type: [String], required: true },
  desc: { type: String, required: true },
  title: { type: String, required: true },
  rating: { type: Number, min: 0, max: 5 },

  //one to many hotel 1-n room // cos the thay the bang   type:mongoose.Schema.Types.ObjectId, ref:'Room'
  rooms: { type: [String] },
  cheapestPrice: { type: Number },
  featured: {
    type: Boolean,
    default: false,
  },
});
const Hotel = mongoose.model("hotels", HotelSchema);
export default Hotel;
// 1-n hotel 1-n room, hotelmodel  : rooms :[String (room Id)]
