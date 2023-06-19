import { Request, Response, Router } from "express";
import { Funcionarios } from "../models/Funcionarios";

const funcionariosRouter: Router = Router();

funcionariosRouter.get(
  "/funcionarios",
  async (req: Request, res: Response): Promise<Response> => {
    const funcionarios: Funcionarios[] = await Funcionarios.findAll();
    const quantidadeFuncionarios: number = await Funcionarios.count();
    return res.status(200).json({ quantidadeFuncionarios, funcionarios });
  }
);

funcionariosRouter.get(
  "/funcionarios/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const funcionarios: Funcionarios | null = await Funcionarios.findByPk(id);
    return res.status(200).json(funcionarios);
  }
);

funcionariosRouter.post(
  "/funcionarios",
  async (req: Request, res: Response): Promise<Response> => {
    const funcionarios: Funcionarios = await Funcionarios.create({
      ...req.body,
    });
    return res.status(201).json(funcionarios);
  }
);

funcionariosRouter.put(
  "/funcionarios/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    await Funcionarios.update({ ...req.body }, { where: { id } });
    const updatedFuncionario: Funcionarios | null = await Funcionarios.findByPk(
      id
    );
    return res.status(200).json(updatedFuncionario);
  }
);

funcionariosRouter.delete(
  "/funcionarios/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const deletedFuncionario: Funcionarios | null = await Funcionarios.findByPk(
      id
    );
    await Funcionarios.destroy({ where: { id } });
    return res.status(200).json(deletedFuncionario);
  }
);

export { funcionariosRouter };
