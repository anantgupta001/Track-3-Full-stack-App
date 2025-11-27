import db from "../models/index.js";

export const getTasks = async (req, res) => {
  try {
    const data = await db.Task.findAll({ include: db.Employee });
    res.json(data);
  } catch (error) {
    console.error('Error in getTasks:', error);
    res.status(500).json({ error: "Server Error" });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const data = await db.Task.findByPk(req.params.id, { include: db.Employee });
    if (!data) return res.status(404).json({ message: "Not found" });
    res.json(data);
  } catch (error) {
    console.error('Error in getTaskById:', error);
    res.status(500).json({ error: "Server Error" });
  }
};

export const createTask = async (req, res) => {
  try {
    const data = await db.Task.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    console.error('Error in createTask:', error);
    res.status(500).json({ error: "Error creating task" });
  }
};

export const updateTask = async (req, res) => {
  try {
    await db.Task.update(req.body, { where: { id: req.params.id } });
    const updated = await db.Task.findByPk(req.params.id);
    res.json(updated);
  } catch (error) {
    console.error('Error in updateTask:', error);
    res.status(500).json({ error: "Error updating task" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    await db.Task.destroy({ where: { id: req.params.id } });
    res.json({ message: "Task deleted" });
  } catch (error) {
    console.error('Error in deleteTask:', error);
    res.status(500).json({ error: "Error deleting task" });
  }
};
