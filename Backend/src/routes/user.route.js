import { Router } from "express";
import { handleUserSignupPost } from '../controllers/signup.controller.js';

const route = Router();

route.route("/signup").post(handleUserSignupPost);

export default route;