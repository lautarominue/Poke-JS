import { Router } from "express";
import { userController } from "../../controllers/index.controller.js";
const router = Router()

router.get('/', userController.homeView);

router.get('/user', userController.getUser);

router.get('/login', userController.logInView);

router.post('/login', userController.logIn);

router.get('/signup', userController.signUpView);

router.post('/signup', userController.signUp);

router.get('/logout', userController.logOutView);

router.get('/game', userController.game)

export { router as userRouter }
