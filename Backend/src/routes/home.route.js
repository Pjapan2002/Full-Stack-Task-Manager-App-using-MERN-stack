import { Router } from "express";
import { handleHomeGet, handleHomePost, handleHomeDelete , handleHomeEdit } from "../controllers/home.controller.js";
import { loginUserOnly } from '../middlewares/auth.middleware.js'

const router = Router();

router.route('/todos').get( loginUserOnly, handleHomeGet)

router.route('/todos').post( loginUserOnly, handleHomePost )

router.route('/todos/:id').delete( loginUserOnly, handleHomeDelete)

router.route('/todos/:id').put( loginUserOnly, handleHomeEdit)

 
export default router;