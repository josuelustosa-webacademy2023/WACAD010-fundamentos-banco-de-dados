import express from "express";
import { produtoRouter } from "./routes/produto.routes";
import { categoriaRouter } from "./routes/categoria.routes";
//import { clienteRouter } from "./routes/cliente.routes";
//import { vendaRouter } from "./routes/venda.routes";

const routes = [
  produtoRouter,
  categoriaRouter,
  //clienteRouter,
  //vendaRouter
];

export class Api {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.middleware();
    this.router();
  }

  private middleware() {
    this.server.use(express.json());
  }

  private router() {
    this.server.use(routes);
  }
}
