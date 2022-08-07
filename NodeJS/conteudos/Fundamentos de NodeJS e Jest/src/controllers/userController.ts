import { Request, Response } from "express";
import { dataBase } from "../database";

export class  UsersController {
    criarUsuario (req: Request, res: Response): Response {
        const { name } = req.body;
    
        if(name.length < 1)
            return res.status(203).json({mensagem: 'Não é possivel criar usuários sem nome'});
    
        dataBase.push(name);
        return res.status(201).json({'mensagem': `Usuário ${name} criado`});
    }

    listarUsuario(req: Request, res: Response): Response{
        return res.status(200).json(dataBase);
    }
}