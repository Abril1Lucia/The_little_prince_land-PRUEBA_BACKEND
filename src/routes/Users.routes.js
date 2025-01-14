import { createUser, showUsers } from '../controllers/Users.controllers.js';
import express from 'express'
import auth from '../middleware/auth.js';

export const usersRouter = express.Router();

usersRouter.post('/crear', createUser);

usersRouter.get('/obtener', auth('admin'), showUsers);
