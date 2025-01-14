import { request, response } from "express";
import { verifyToken } from "../lib/jwt.js";

function auth(requiredRole) {

    return async (recuest, response, next) => {

        let token = recuest.headers['authorization'];
        console.log('mira el token... ta bien bonito :) k orgullo--------- ' + token)

        if(!token){
            return response.status(401).json({
                mensaje: 'no hay token, no tienes permiso para pasar, devuelvete o te doy chancla 🩴'
            })
        }

        token = token.split (' ')[1];
        console.log('token despues de separarlo del baerer ' + token) 



        try {
            let decoded = await verifyToken(token);
            console.log('token decodificado... si se pudo we ', decoded)

            // si se nececita la validacion, y se necesita al admin, pero el ususario no lo es, se muestra un mensaje de que no lo es
    
                if(requiredRole === 'admin' && !decoded.isAdmin){
                    return response.status(401).json({
                        mensaje:'oe! que haces aca? tu no puedes pasar! solo es para admins, ahora vete antes que te acuse con el creador de la pagina.'
                    })
                }

                recuest.user=decoded
            
            
        } catch (error) {
            return response.status(500).json({
                mensaje: 'no se pudo autenticar el token ;-; perdon',
                problema: error.message || error
            })
           
        }

        next();

    }
  
   
 

}

export default auth;