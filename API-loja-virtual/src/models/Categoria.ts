import {
  Table,
  Model,
  Column,
  DataType,
  IsUUID,
  PrimaryKey,
  AllowNull,
  Unique,
  HasMany,
} from "sequelize-typescript";
import { INTEGER } from "sequelize";
import { Produto } from "./Produto";

@Table({
  timestamps: true,
})
export class Categoria extends Model {
  @IsUUID("all")
  @PrimaryKey
  @Column({
    type: INTEGER,
    autoIncrement: true,
  })
  id!: number;

  @AllowNull(false)
  @Unique
  @Column({
    type: DataType.STRING,
  })
  descricao!: string;

  @HasMany(() => Produto)
  produtos!: Produto[];
}
