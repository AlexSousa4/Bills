import { Router } from "express";
import { CategoriesController } from "../Controllers/categories.controllers";

export const categoriesRoutes = Router();

const controller = new CategoriesController();

categoriesRoutes.post('/', controller.create);
