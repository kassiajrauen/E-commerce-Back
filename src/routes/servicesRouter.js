import express from "express";
import { getServices } from '../controllers/servicesController.js';
//import { validateToken } from "../middlewares/validateToken.js";

const servicesRouter = express.Router();

//servicesRouter.use(validateToken)
servicesRouter.get("/services", getServices);

export default servicesRouter;