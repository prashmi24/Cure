import express from "express";
import {
  deleteDoctor,
  updateDoctor,
  getAllDoctor,
  getSingleDoctor,
} from "../controllers/doctorController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";
import reviewRouter from "./review.js";

const router = express.Router();
router.get("/:id", getSingleDoctor);
router.get("/", getAllDoctor);
router.put("/:id", authenticate, restrict(["doctor"]), updateDoctor);
router.delete("/:id", authenticate, restrict(["doctor"]), deleteDoctor);
router.use("/:doctorId/reviews", reviewRouter);

export default router;
