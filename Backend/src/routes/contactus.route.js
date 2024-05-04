import { Router } from "express";

import { handleContactusPost } from "../controllers/contactus.controller.js";

const router = Router();

router.route("/").post( handleContactusPost );

export default router;