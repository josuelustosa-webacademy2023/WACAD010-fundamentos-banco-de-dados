import {
  Table,
  Model,
  Column,
  DataType,
  IsUUID,
  PrimaryKey,
  AllowNull,
  IsEmail,
  Unique,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { INTEGER } from "sequelize";
import { Funcionarios } from "./Funcionarios";

@Table({
  timestamps: true,
})
export class Dependentes extends Model {
  @IsUUID("all")
  @PrimaryKey
  @Column({
    type: INTEGER,
    autoIncrement: true,
  })
  id!: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  name!: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
  idade!: number;

  @ForeignKey(() => Funcionarios)
  @Column({
    type: INTEGER,
  })
  funcionarioId!: number;

  @BelongsTo(() => Funcionarios)
  funcionario!: Funcionarios;
}
