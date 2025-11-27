import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import {
    getEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
} from '../controllers/employeeController.js';

const router = express.Router();

router.route('/').get(protect, getEmployees).post(protect, createEmployee);
router.route('/:id').get(protect, getEmployeeById).put(protect, updateEmployee).delete(protect, deleteEmployee);

export default router;
