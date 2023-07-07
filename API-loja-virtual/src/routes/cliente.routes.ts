import { Request, Response, Router } from "express";
import { Cliente } from "../models/Cliente";

const clienteRouter: Router = Router();

clienteRouter.post(
  "/cliente",
  async (req: Request, res: Response): Promise<Response> => {
    const cliente: Cliente = await Cliente.create({ ...req.body });

    return res.status(201).json({
      categoria: cliente,
      msg: "Cliente cadastrado(a) com sucesso.",
    });
  }
);

clienteRouter.get(
  "/cliente",
  async (req: Request, res: Response): Promise<Response> => {
    const produtos: Cliente[] = await Cliente.findAll();
    return res.status(200).json(produtos);
  }
);

export { clienteRouter };
