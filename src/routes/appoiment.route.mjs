// sirve para  definir los endpoints de una entiedad  
import { Router } from "express" // importamos express rouer
import { createAppoiment, deleteAppoiment, getAppoiment, updateAllAppoiment, updateAppoiment } from "../controllers/appoiment.controllers.mjs";


const router = Router();  // preparandolo para definir rutas 

// define las rutas de acceso 
// toca definir cuantos alcanza para el proyecto de nosotros, no  todos se necesitan 
// DEFINE LA RUTA DE ACCESO SIENDO IMPORTADA
router.get('/api/appoiment', getAppoiment);

router.post('/api/appoiment', createAppoiment);

router.patch('/api/appoiment', updateAppoiment);

router.put('/api/appoiment', updateAllAppoiment);

router.delete('/api/appoiment' ,deleteAppoiment);

export default router; // exportandolo las rutas para ser usadas en cualquier parte de la aplicacion. 

