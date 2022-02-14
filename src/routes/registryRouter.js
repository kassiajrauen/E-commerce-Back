import express from "express";
import { /*deleteRegistry, editRegistry,*/ postRegistry } from '../controllers/registryController.js';
//import { validateToken } from "../middlewares/validateToken.js";
//import validateRegistrySchemaMiddleware from "../middlewares/validateRegistrySchemaMiddleware.js";

const registryRouter = express.Router();

// registryRouter.use(validateToken)

registryRouter.post("/registry", /*validateRegistrySchemaMiddleware,*/ postRegistry);

// registryRouter.put("registry/:id", validateRegistrySchemaMiddleware, editRegistry);

// registryRouter.delete("registry/:id", deleteRegistry);

export default registryRouter;