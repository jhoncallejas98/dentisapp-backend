import express from 'express';
import { createUser } from '../controller/users.controller.mjs';
import { userLogin } from '../controller/auth.controller.mjs';

const router = express.Router();
router.post('/api/register', createUser);
router.post('/api/login', userLogin);


export default router;