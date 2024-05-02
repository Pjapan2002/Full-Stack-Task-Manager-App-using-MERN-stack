import { Router } from "express";

import { handleContactusPost } from "../controllers/contactus.controller";

const router = Router();

router.route("/").post( handleContactusPost );

export default router;