import { Request, Response, Router } from "express";
import { Produto } from "../models/Produto";
import { Categoria } from "../models/Categoria";

const produtoRouter: Router = Router();

produtoRouter.get(
  "/produto",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const produtos: Produto[] = await Produto.findAll();
      res.status(200).json(produtos);
    } catch (erro) {
      res.status(404).json(erro);
    }
  }
);

produtoRouter.post(
  "/produto",
  async (req: Request, res: Response): Promise<Response> => {
    const { id_categoria } = req.body;

    const categoriaCadastrada = await Categoria.findByPk(id_categoria);

    if (categoriaCadastrada) {
      const criarProduto: Produto = await Produto.create({ ...req.body });
      return res.status(201).json({
        produto: criarProduto,
        msg: "Produto cadastrado com sucesso.",
      });
    } else {
      return res.status(404).json({ msg: "Categoria não existe." });
    }
  }
);

export { produtoRouter };
