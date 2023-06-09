import express from "express";
import { funcionariosRouter } from "./routes/Funcionarios.routes";
import { departamentosRouter } from "./routes/Departamentos.routes";
import { dependentesRouter } from "./routes/Dependentes.routes";
import { projetosRouter } from "./routes/Projetos.routes";

const routes = [
  funcionariosRouter,
  departamentosRouter,
  dependentesRouter,
  projetosRouter,
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
