import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Employee = sequelize.define("Employee", {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  role: { type: DataTypes.STRING, allowNull: false }
});

export default Employee;
