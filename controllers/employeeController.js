import Employee from "../models/employee.js";

export const getEmployees = async (req, res) => {
  try {
    const data = await Employee.findAll();
    res.json(data);
  } catch {
    res.status(500).json({ error: "Server Error" });
  }
};

export const getEmployeeById = async (req, res) => {
  try {
    const data = await Employee.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: "Not found" });
    res.json(data);
  } catch {
    res.status(500).json({ error: "Server Error" });
  }
};

export const createEmployee = async (req, res) => {
  try {
    const data = await Employee.create(req.body);
    res.status(201).json(data);
  } catch {
    res.status(500).json({ error: "Error creating employee" });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    await Employee.update(req.body, { where: { id: req.params.id } });
    const updated = await Employee.findByPk(req.params.id);
    res.json(updated);
  } catch {
    res.status(500).json({ error: "Error updating employee" });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    await Employee.destroy({ where: { id: req.params.id } });
    res.json({ message: "Employee deleted" });
  } catch {
    res.status(500).json({ error: "Error deleting employee" });
  }
};
