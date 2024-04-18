import { Router } from "express";

const router = Router();

router.get('/', ( req, res ) => {
    res.send("Logout Page")
})

export default router;