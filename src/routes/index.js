import express from "express";
//import authRouter from "./authRouter.js";
import servicesRouter from './servicesRouter.js';
import registryRouter from './registryRouter.js';

const router = express.Router();

//router.use(authRouter);
router.use(servicesRouter);
router.use(registryRouter);

export default router;