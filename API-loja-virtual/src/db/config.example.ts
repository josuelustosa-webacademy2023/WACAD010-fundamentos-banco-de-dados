import { Sequelize } from "sequelize-typescript";
import { Produto } from "../models/Produto";
import { Categoria } from "../models/Categoria";
import { Cliente } from "../models/Cliente";
import { Venda } from "../models/Venda";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "username",
  password: "senha",
  database: "nomebancodedados",
  logging: false,
  models: [Produto, Categoria, Cliente, Venda],
});

export default connection;
