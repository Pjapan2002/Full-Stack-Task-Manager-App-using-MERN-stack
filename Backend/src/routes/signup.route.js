import { Router } from "express";
import { handleGet, handlePost } from "../controllers/signup.controller.js";

const router = Router();

router.get('/', handleGet)

router.post('/', handlePost)

export default router;