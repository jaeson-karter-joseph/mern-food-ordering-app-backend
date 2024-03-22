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