import express, { Request, Response } from "express";
import { param } from "express-validator";
import RestaurantController from "../controllers/RestaurantController";

const router = express.Router();

router.get("/search/:city", param("city").isString().trim().notEmpty().withMessage("City Param Must Be String"), RestaurantController.searchRestaurant);


export default router;