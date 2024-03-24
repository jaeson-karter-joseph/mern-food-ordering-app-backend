import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

const handleValidationErrors = (req: Request, res: Response, next: NextFunction) => {
    const error = validationResult(req);
    if(!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }
    next();
}

export const validateMyUserRequest = [
    body("name").isString().notEmpty().withMessage("Name Should be String"),
    body("addressLine1").isString().notEmpty().withMessage("Address Line 1 Should be String"),
    body("country").isString().notEmpty().withMessage("Country Should be String"),    
    body("city").isString().notEmpty().withMessage("City Should be String"),
    handleValidationErrors
];

export const validateMyRestaurantRequest = [
    body("restaurantName").isString().notEmpty().withMessage("Restaurant Name Should be String"),
    body("city").isString().notEmpty().withMessage("City Should be String"),
    body("country").isString().notEmpty().withMessage("Country Should be String"),
    body("deliveryPrice").isNumeric().notEmpty().withMessage("Delivery Price Should be Number"),
    body("estimatedDeliveryTime").isNumeric().notEmpty().withMessage("Estimated Delivery Time Should be Number"),
    body("cuisines").isArray().notEmpty().withMessage("Cuisines Should be Array"),
    body("menuItems").isArray().withMessage("Menu Items Should be Array"),
    body("menuItems.*.name").notEmpty().withMessage("Menu Items Should be not Empty"),
    body("menuItems.*.price").isNumeric().notEmpty().withMessage("Menu Items Should be not Empty"),
    handleValidationErrors
];