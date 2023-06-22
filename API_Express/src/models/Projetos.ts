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
  HasOne,
  HasMany,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";
import { INTEGER, DATE } from "sequelize";
import { Departamentos } from "./Departamentos";

@Table({
  timestamps: true,
})
export class Projetos extends Model {
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
  name!: string;

  @ForeignKey(() => Departamentos)
  @AllowNull(true)
  @Column({
    type: INTEGER,
  })
  departamentoId!: number;

  @CreatedAt
  @Column({
    type: DATE,
  })
  dataCriacao!: Date;

  @UpdatedAt
  @Column({
    type: DATE,
  })
  dataFinalização!: Date;
}
