//c importa la dependencia

import mongoose from "mongoose";

//plantilla de los datos para solicitar guardar la base de datos we


const imageSchema = new mongoose.Schema({
    image:{type: String, required: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    technique:{type: String, required: true},
    category: {type: String, required: true}
}); 

//decirle a la base de datos q creee una coleccion en esquema anterior
//el primer parametro es el name de la coleccion
//el segundo parametro es la estructura de datos we

export const imageModel = mongoose.model('image', imageSchema);