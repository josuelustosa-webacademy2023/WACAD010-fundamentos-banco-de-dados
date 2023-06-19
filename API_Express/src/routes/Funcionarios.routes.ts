import { Request, Response, Router } from "express";
import { Funcionarios } from "../models/Funcionarios";

const funcionariosRouter: Router = Router();

funcionariosRouter.get(
  "/funcionarios",
  async (req: Request, res: Response): Promise<Response> => {
    const funcionarios: Funcionarios[] = await Funcionarios.findAll();
    const quantidadeFuncionarios: number = await Funcionarios.count();
    return res.status(200).json({quantidadeFuncionarios, funcionarios});
  }
);

export { funcionariosRouter };
