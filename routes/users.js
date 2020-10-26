import express from 'express';
import UserController from '../controllers/UserController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', UserController.getUsers);
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/logout', auth, UserController.logout);

export default router;