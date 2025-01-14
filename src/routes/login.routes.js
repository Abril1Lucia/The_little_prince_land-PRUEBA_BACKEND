import loginUsers from "../services/loginUsers.Service.js";

import loginAdmins from "../services/loginadmin.service.js";

import express from "express";

const loginRouter = express.Router();

loginRouter.post('/Admin', loginAdmins)

loginRouter.post('/Users', loginUsers)

export default loginRouter;