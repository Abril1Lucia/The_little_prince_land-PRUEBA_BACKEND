// import { response } from "express";
import {imageModel} from "../models/Images.model.js"
// import { productRouter } from "../routes/products.routes.js";

//peticion del post para crear productos
export const postimage = async (request, response) => {
  // return Response.json({'mensaje': 'ACA FUNCIONA WE'})

  try {
    //para crear se necesita enviar la info
    //la info se envia al cuerpo de la peticion
    //asi creamos una coleccion de bases de datos we
    const newimage = await imageModel.create(request.body);
    return response.status(201).json({
      mensaje: "mira, si pude :D",
      datos: newimage
    });
  } catch (error) {
    return response.status(400).json({
      mensaje: "te tiraste mi servidor",
      problem: error || error.message
    });
  }
};







//peticion del get para mostrarlos
export const getimage = async (request, response) => {
  //logica de la peticion we
  // return Response.json ({'Mensaje': 'MIRA WE, SIN MANOS'})

  try {
    let images = await imageModel.find();

    //le vamos a poner k pasa si no hay nada we :)

    if (images.length === 0) {
      return response.status(200).json({
        mensaje: "no hay nada, yo de ti o creo algo o me devuelvo",
      });
    }
    return response.status(200).json({
      mensaje: "esto es todo lo que encontre para ti",
      datos: images
    });
  } catch (error) {
    return response.status(400).json({
      mensaje: "no c pudo encontrar nada",
      problem: error || error.message
    });
  }
};






//peticion del put para actualizarlos we
export const putimageById = async (request, response) => {
  //logica de la peticion put we
  // return response.json ({'Mensaje': 'ESTO ES COMPLICADO WE'})

  try {
    let idForput = request.params.id;
    let dataForUpdate = request.body;

    const imageUpdate = await imageModel.findByIdAndUpdate(idForput, dataForUpdate);

    if (!imageUpdate) {
      return response.status(200).json({
        mensaje: "no se pudo, no quiero mostrarte nada we >:D",
      });
    }

    return response.status(200).json({
      mensaje: "no se pu... nah mentira, si se pudo actualizar :D",
      datos: imageUpdate
    });

  } catch (error) {
    return response.status(400).json({
      mensaje: "perdon, no pude ;-:",
      problem: error || error.message
    });
  }
};
//peticion del delete para eliminarlos we










export const DeleteimageById = async (request, response) => {
  //logica de la peticion put we
//   return response.json({ Mensaje: "NAH MENTIRA :)" });

try {

    let idForDelete = request.params.id;

    await imageModel.findByIdAndDelete(idForDelete);

    return response.status(200).json({
        mensaje: "no se pudo... evitar que se elimine XD, si lo pude eliminar we"
      });
    
} catch (error) {
    
    return response.status(400).json({
        mensaje: "ni para eliminar cosas sirvo D:",
        problem: error || error.message
      });
} 
};