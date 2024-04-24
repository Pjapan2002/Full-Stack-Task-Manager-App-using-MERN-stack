import { Router } from "express";
import { handleHomeGet, handleHomePost, handleHomeDelete , handleHomeEdit } from "../controllers/home.controller.js";

const router = Router();

router.route('/todos').get(handleHomeGet)

router.route('/todos').post(handleHomePost)

router.route('/todos/:id').delete(handleHomeDelete)

router.route('/todos/:id').put(handleHomeEdit)

 
export default router;