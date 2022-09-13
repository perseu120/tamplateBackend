import { exemploConsultaBanco } from '../repositories/authRepository';
import { Response, Request } from "express";
import { exemploexemploService} from '../services/authService';

export async function exemploController(req: Request, res: Response){

    const recebeDados = String(req.body.email);

    const token = await exemploService(recebeDados);
 
    res.status(200).send("cheguei no controlador");
}
