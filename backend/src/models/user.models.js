// src/models/user.model.js
import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";   // reuse existing instance

const User = sequelize.define(
  "User",
  {
    id:{type:DataTypes.INTEGER,autoIncrement:true,primaryKey:true},
    name:{type:DataTypes.STRING,allowNull:false},
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    phonr:{type:DataTypes.STRING,unique:true},
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.ENUM("kiosk", "staff"), allowNull: false },
  },
  {
    defaultScope: {
      attributes: { exclude: ["password"] },
    },
  }
);

export default User;
