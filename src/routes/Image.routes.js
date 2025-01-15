// import { postproduct } from "../controllers/products.controller";

import { getimage, postimage, DeleteimageById, putimageById} from '../controllers/images.controller.js';
//configura el router del express
import express from 'express';

import auth from '../middleware/auth.js';


export const productRouter = express.Router();

//creame rutas para los productos
 

//ruta para el get leer obtener o mostrar we
//primero determino la ruta luego indico que debe hacer we
productRouter.get('/obtener', getimage);

//ruta de peticion para el producto crear we
productRouter.post('/crear', postimage);
//ruta de peticion para el producto actualizar we

productRouter.put('/actualizar/:id', putimageById);

//ruta de peticion para el producto para eliminar we
productRouter.delete('/eliminar/:id', DeleteimageById);