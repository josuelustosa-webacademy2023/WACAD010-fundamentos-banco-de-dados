import { Request, Response, Router } from "express";
import { Categoria } from "../models/Categoria";

const categoriaRouter: Router = Router();

categoriaRouter.get(
  "/categoria",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const categorias: Categoria[] = await Categoria.findAll();

      res.status(200).json(categorias);
    } catch (err) {
      res.status(404).json(err);
    }
  }
);

categoriaRouter.get(
  "/categoria/:id",
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
      const categoria: Categoria | null = await Categoria.findByPk(id);

      if (categoria === null)
        res.status(404).json({ msg: "Categoria não existe." });
      else res.status(200).json(categoria);
    } catch (err) {
      res.status(404).json(err);
    }
  }
);

categoriaRouter.post(
  "/categoria",
  async (req: Request, res: Response): Promise<Response> => {
    const { descricao } = req.body;

    const categoriaCadastrada = await Categoria.findOne({
      where: { descricao },
    });

    if (categoriaCadastrada)
      return res
        .status(400)
        .json({ msg: "Categoria já cadastrada com esse nome." });
    else {
      const criaCategoria: Categoria = await Categoria.create({
        ...req.body,
      });
      return res.status(201).json({
        categoria: criaCategoria,
        msg: "Categoria cadastrada com sucesso.",
      });
    }
  }
);

categoriaRouter.put(
  "/categoria/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    const categoriaCadastrada: Categoria | null = await Categoria.findByPk(id);

    if (categoriaCadastrada) {
      await Categoria.update({ ...req.body }, { where: { id } });
      return res.status(200).json({ msg: "Categoria editada com sucesso!" });
    } else return res.status(404).json({ msg: "Categoria não existe." });
  }
);

categoriaRouter.delete(
  "/categoria/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    const categoriaCadastrada: Categoria | null = await Categoria.findByPk(id);

    if (categoriaCadastrada) {
      await Categoria.destroy({ where: { id } });
      return res.status(200).json({ msg: "Categoria excluída com sucesso!" });
    } else return res.status(404).json({ msg: "Categoria não existe." });
  }
);

export { categoriaRouter };
