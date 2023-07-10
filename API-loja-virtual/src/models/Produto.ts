import {
  Table,
  Model,
  Column,
  DataType,
  PrimaryKey,
  AllowNull,
  Unique,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { INTEGER } from "sequelize";
import { Categoria } from "./Categoria";

@Table({
  timestamps: true,
})
export class Produto extends Model {
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

  @AllowNull(false)
  @Column({
    type: DataType.DECIMAL(10, 2),
  })
  preco!: number;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
  quantidade!: number;

  @ForeignKey(() => Categoria)
  @AllowNull(false)
  @Column({
    type: INTEGER,
  })
  id_categoria!: number;

  @BelongsTo(() => Categoria, "id_categoria")
  categoria!: Categoria;
}
