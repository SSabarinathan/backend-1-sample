import express from 'express';
import { newUserController, userController } from '../controllers/user.controller';

export const userRouter= express.Router();
export const newUserRouter= express.Router();

userRouter.get('/', userController.user)

newUserRouter.post('/', newUserController.newUser)



//
