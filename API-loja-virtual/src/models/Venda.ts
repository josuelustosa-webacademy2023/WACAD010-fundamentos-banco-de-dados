import {
  Table,
  Model,
  Column,
  DataType,
  IsUUID,
  PrimaryKey,
  AllowNull,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { INTEGER } from "sequelize";
import { Cliente } from "./Cliente";
import { Produto } from "./Produto";

@Table({
  timestamps: true,
})
export class Venda extends Model {
  @IsUUID("all")
  @PrimaryKey
  @Column({
    type: INTEGER,
    autoIncrement: true,
  })
  id!: number;

  @ForeignKey(() => Cliente)
  @AllowNull(false)
  @Column({
    type: INTEGER,
  })
  id_cliente!: number;

  @BelongsTo(() => Cliente, "id_cliente")
  cliente!: Cliente;

  @ForeignKey(() => Produto)
  @AllowNull(false)
  @Column({
    type: INTEGER,
  })
  id_produto!: number;

  @BelongsTo(() => Produto, "id_produto")
  produto!: Produto;

  @AllowNull(false)
  @Column({
    type: DataType.DECIMAL(10, 2),
  })
  valor_total!: number;
}
