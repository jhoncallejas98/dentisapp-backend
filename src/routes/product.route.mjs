// sirve para  definir los endpoints de una entiedad  
import { Router } from "express" // importamos express rouer

const router = Router();  // preparandolo para definir rutas 

// define las rutas de acceso 
// toca definir cuantos alcanza para el proyecto de nosotros, no  todos se necesitan 
router.get('/p/products', (req, res)=> {
    res.send( 'Obtiene todos los productos')
});
router.post('/api/products', (req, res)=> {
    res.send( 'Crear un productos')
});
router.patch('/api/products', (req, res)=> {
    res.send( 'Actualizacion parcial de un productos')
});

router.put('/api/products', (req, res)=> {
    res.send( 'Actualizacion total de un producto')
});

router.delete('/api/products', (req, res)=> {
    res.send( 'Elimina un producto')
});

export default router; // exportandolo las rutas para ser usadas en cualquier parte de la aplicacion. 

