import { Sequelize } from "sequelize-typescript";
import { Departamentos } from "../models/Departamentos";
import { Funcionarios } from "../models/Funcionarios";
import { Dependentes } from "../models/Dependentes";
import { Projetos } from "../models/Projetos";

const connection = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  logging: false,
  models: [Funcionarios, Departamentos, Dependentes, Projetos],
});

export default connection;
