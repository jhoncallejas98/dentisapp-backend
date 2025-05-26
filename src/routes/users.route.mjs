import express from 'express';

import { createUsers, getAllProducts} from '../controller/users.controller.mjs'

const router = express.Router();

router.post('/api/users', createUsers);
router.get("/api/users", getAllProducts)

export default router;