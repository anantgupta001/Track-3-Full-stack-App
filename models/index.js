import sequelize from "../config/db.js";
import Employee from "./employee.js";
import Task from "./task.js";
import User from './user.js';

Employee.hasMany(Task, { foreignKey: "employeeId", onDelete: "CASCADE" });
Task.belongsTo(Employee, { foreignKey: "employeeId" });

User.sync();
Employee.sync();
Task.sync();

const db = { sequelize, Employee, Task };

export default db;
