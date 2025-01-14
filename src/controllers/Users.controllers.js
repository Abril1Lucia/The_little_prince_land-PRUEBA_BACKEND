import { userModel } from "../models/Users.model.js";

import bcrypt from "bcryptjs";

// import bcrypt from "bcryptjs"

//funciones async para las peticiones we 

//post para crear usuarios

export const createUser = async (req, res) => {
    try {

      const {image, fullName, email, password, phone} = req.body;
  
      // password = panconchocolate;

      const codedPassword = await bcrypt.hash(password, 10);
      
      const newUser = await userModel.create({
          image,
          fullName,
          email,
          password:codedPassword,
          phone
      });
  
      // 201 es q se creó correctamente
      return res.status(201).json({
          mensaje: 'hola we, ya te cree un usuario',
          datos: newUser
      });
  
    } catch (error) {
      return res.status(201).json({
          mensaje: 'no se pudo we, estas muy feo para esta plataforma, perdon',
          problema: error || error.message
      });
    }
  };
  

  
  // get Mostrar usuarios
  export const showUsers = async (req, res) => {
    //  errores
    try {

      let users = await userModel.find();
      if(users.length === 0){
          return res.status(200).json({
              mensaje: 'tas solito we ;-;'
          })
      }
  
      return res.status(200).json({
          menasaje: 'ya no estas solito we',
          numeroUsuarios: users.length,
          datos: users
      })
  
    } catch (error) {
      return res.status(400).json({
          mensaje: 'no c pudo we ;-; no c moleste que es mi primer dia D:',
          problema: error || error.message
      });
    }
  };

