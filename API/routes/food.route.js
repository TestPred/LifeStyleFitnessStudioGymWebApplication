import express from "express";
import {
  addFoodItem,
  deleteFoodItem,
  getFoodItemById,
  getFoodItems,
  searchByName,
  updateFoodItem,
} from "../controllers/food.controller.js";

const router = express.Router();

router.post("/addFood", addFoodItem);
router.get("/getFoods", getFoodItems);
router.delete("/deleteFood/:id", deleteFoodItem);
router.get("/getFoodById/:id", getFoodItemById);
router.patch("/updateFood/:id", updateFoodItem);
router.get("/searchByName/:name", searchByName);

export default router;
