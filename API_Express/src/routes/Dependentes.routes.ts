import { Request, Response, Router } from "express";
import { Dependentes } from "../models/Dependentes";

const dependentesRouter: Router = Router();

dependentesRouter.get(
  "/dependentes",
  async (req: Request, res: Response): Promise<Response> => {
    const todosDependentes: Dependentes[] = await Dependentes.findAll();
    return res.status(200).json(todosDependentes);
  }
);

dependentesRouter.get(
  "/dependentes/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const dependentes: Dependentes | null = await Dependentes.findByPk(id);
    return res.status(200).json(dependentes);
  }
);

dependentesRouter.post(
  "/dependentes",
  async (req: Request, res: Response): Promise<Response> => {
    const dependentes: Dependentes = await Dependentes.create({ ...req.body });
    return res.status(201).json(dependentes);
  }
);

dependentesRouter.put(
  "/dependentes/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    await Dependentes.update({ ...req.body }, { where: { id } });
    const updatedDependente: Dependentes | null = await Dependentes.findByPk(
      id
    );
    return res.status(200).json(updatedDependente);
  }
);

dependentesRouter.delete(
  "/dependentes/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const deletedDependente: Dependentes | null = await Dependentes.findByPk(
      id
    );
    await Dependentes.destroy({ where: { id } });
    return res.status(200).json(deletedDependente);
  }
);

dependentesRouter.get(
  "/funcionarios/:id/dependentes",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const dependentes: Dependentes[] = await Dependentes.findAll({
      where: { funcionarioId: id },
    });

    return res.status(200).json(dependentes);
  }
);

export { dependentesRouter };
