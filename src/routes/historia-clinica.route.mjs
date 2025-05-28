import express from 'express';
import { createHistoriaClinica } from '../controllers/historia-clinica.controller.mjs';

const router = express.Router();

router.post( '/api/historia-clinica', createHistoriaClinica );
router.get( '/api/historia-clinica' )

router.get()


export default router;