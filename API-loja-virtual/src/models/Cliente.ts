import {
  Table,
  Model,
  Column,
  DataType,
  IsUUID,
  PrimaryKey,
  AllowNull,
  Unique,
} from "sequelize-typescript";
import { INTEGER } from "sequelize";

@Table({
  timestamps: true,
})
export class Cliente extends Model {
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
  nome!: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  endereco!: string;

  @AllowNull(false)
  @Unique
  @Column({
    type: DataType.STRING,
  })
  email!: string;
}
