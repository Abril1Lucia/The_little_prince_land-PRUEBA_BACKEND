import jwt from "jsonwebtoken";

import dotenv from "dotenv"

dotenv.config();

const key = process.env.SECRET_KEY

export function generatetoken(payload){
     
    return new Promise((resolve, reject)=>{
        jwt.sign(payload,key,{expiresIn:'1h'}, (error, token) =>{
            if(error){
                reject(new Error('error al generar JWT' + error.message));


            }else{
                resolve(token);
            }
        });
    });
}


export const verifyToken = (Token)=>{
    return new Promise((resolve, reject) => {
        jwt.verify(Token, key, (error, decoded)=>{
            if(error){
                reject(new error("error al verificar el JWT" + error.message));
            }else{
                resolve(decoded);
            }
        });
    });
}