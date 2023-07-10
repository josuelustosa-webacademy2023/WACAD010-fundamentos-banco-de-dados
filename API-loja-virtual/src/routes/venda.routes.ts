import { Router } from "express";
import { Request, Response } from "express";
import { Venda } from "../models/Venda";

const vendaRouter: Router = Router();

vendaRouter.get(
  "/venda",
  async (req: Request, res: Response): Promise<Response> => {
    const vendas: Venda[] = await Venda.findAll();
    return res.status(200).json(vendas);
  }
);

vendaRouter.get(
  "/venda/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    const vendaCadastrada: Venda | null = await Venda.findByPk(id);
    return res.status(200).json(vendaCadastrada);
  }
);

vendaRouter.post(
  "/venda",
  async (req: Request, res: Response): Promise<Response> => {
    const criarVenda: Venda = await Venda.create({ ...req.body });
    return res.status(201).json(criarVenda);
  }
);

vendaRouter.put(
  "/venda/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    const vendaCadastrada: Venda | null = await Venda.findByPk(id);
    
    await Venda.update({ ...req.body }, { where: { id } });
    return res.status(200).json(vendaCadastrada);
  }
);

vendaRouter.delete(
  "/venda/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    const vendaCadastrada: Venda | null = await Venda.findByPk(id);

    await Venda.destroy({ where: { id } });
    return res.status(200).json(vendaCadastrada);
  }
);

export { vendaRouter };
