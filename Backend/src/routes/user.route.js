import { Router } from "express";
import { handleUserSignupPost, handleUserLoginPost } from '../controllers/user.controller.js';

const route = Router();

route.route("/signup").post(handleUserSignupPost);

route.route("/login").post(handleUserLoginPost);

export default route;