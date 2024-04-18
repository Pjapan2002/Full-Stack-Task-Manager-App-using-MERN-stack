import { Router } from "express";

const router = Router();

router.get('/', ( req, res ) => {
    res.send("Login Page")
})

export default router;