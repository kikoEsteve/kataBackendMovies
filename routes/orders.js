import express from 'express';
import OrderController from '../controllers/OrderController.js';

const router = express.Router();

router.post('/', OrderController.create);
router.post('/', OrderController.getAllOrders);
router.post('/:id', OrderController.getOneOrder);
router.post('/update/:id', OrderController.update);
router.post('/delete/:id', OrderController.delete);

export default router;