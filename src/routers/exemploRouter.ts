import { Router } from "express";
import {exemploController} from '../controllers/authController';


const authRouter = Router();

authRouter.post('/login', exemploController);

export default authRouter;
