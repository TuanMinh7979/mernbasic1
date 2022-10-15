import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./src/routes/auth.js";
import hotelsRoute from "./src/routes/hotels.js";
import usersRoute from "./src/routes/users.js";
import roomsRoute from "./src/routes/rooms.js";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongodb");
  } catch (error) {
    throw error;
  }
};

//middle ware

//for jwt
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
  console.log("---------", err);
  const errStatus = err.status || 500;
  const errMessage = err.message || "Something went wrong";
  return res.status(errStatus).json({
    status: errStatus,
    message: errMessage,
    stack: err.stack,
  });
});

app.get("/", (req, res) => {
  res.send("sfbnssdf");
});

app.listen(8800, () => {
  connect();
  console.log("connected to backend");
});
