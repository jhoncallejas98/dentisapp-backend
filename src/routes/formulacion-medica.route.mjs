import express from 'express';
import { createFormulacionMedica } from '../controllers/formulacion-medica.controller.mjs';

const router = express.Router();

router.post( '/api/formulacion-medica', createFormulacionMedica )

export default router;