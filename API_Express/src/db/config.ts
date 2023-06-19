//models: [Funcionarios];

import { Sequelize } from "sequelize-typescript";
import { Departamentos } from "../models/Departamentos";
import { Funcionarios } from "../models/Funcionarios";

const connection = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  logging: false,
  models: [Funcionarios, Departamentos],
});

export default connection;
