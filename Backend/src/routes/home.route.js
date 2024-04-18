import { Router } from "express";
import { handleGet, handlePost } from "../controllers/home.controller.js";

const router = Router();

router.get('/', handleGet)

router.post('/', handlePost)

export default router;