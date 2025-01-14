import { CreateAdmin, showAdmins } from "../controllers/Admins.controller.js";
import express from "express"
import auth from "../middleware/auth.js";

export const adminsRouter = express.Router();


adminsRouter.post('/crear', auth('admin'), CreateAdmin);

adminsRouter.get('/obtener', auth('admin'), showAdmins);