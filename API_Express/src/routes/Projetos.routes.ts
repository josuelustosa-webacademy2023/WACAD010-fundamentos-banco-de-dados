import { Request, Response, Router } from "express";
import { Projetos } from "../models/Projetos";

const projetosRouter: Router = Router();

projetosRouter.get(
  "/projetos",
  async (req: Request, res: Response): Promise<Response> => {
    const todosProjetos: Projetos[] = await Projetos.findAll();
    return res.status(200).json(todosProjetos);
  }
);

projetosRouter.get(
  "/projetos/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const projeto: Projetos | null = await Projetos.findByPk(id);
    return res.status(200).json(projeto);
  }
);

projetosRouter.post(
  "/projetos",
  async (req: Request, res: Response): Promise<Response> => {
    const projeto: Projetos = await Projetos.create({ ...req.body });
    return res.status(201).json(projeto);
  }
);

projetosRouter.put(
  "/projetos/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    await Projetos.update({ ...req.body }, { where: { id } });
    const updatedProjeto: Projetos | null = await Projetos.findByPk(id);
    return res.status(200).json(updatedProjeto);
  }
);

projetosRouter.delete(
  "/projetos/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const deletedProjeto: Projetos | null = await Projetos.findByPk(id);
    await Projetos.destroy({ where: { id } });
    return res.status(200).json(deletedProjeto);
  }
);

export { projetosRouter };
