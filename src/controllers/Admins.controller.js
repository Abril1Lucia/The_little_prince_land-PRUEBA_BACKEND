import { adminModel } from "../models/admin.models.js";

import bcrypt from "bcryptjs";

export const CreateAdmin = async (req, res) => {

    try {
        const {image, fullname, email, password, role} = req.body;

        // password = vivaelpan

        const codedPassword = await bcrypt.hash(password, 10);

        const newAdmin = await adminModel.create({
            image,
            fullname,
            email,
            password:codedPassword,
            role
        });

        return res.status(201).json({
            mensaje: 'hola Admin, en la sala le deje unas empanadas... no le vaya a pegar a Dobby ;-;',
            datos: newAdmin
        });

        
    } catch (error) {

        return res.status(400).json({
            mensaje: 'Mmmmm... tas seguro que eres un admin? esta medio sospechoso... I-I',
            problema: error || error.message
        });
        
    }
    
}


export const showAdmins = async (req, res) => {
    try {

        let Admin = await adminModel.find();
        if(Admin.length === 0){
            return res.status(200).json({
                mensaje: 'tas solo y abandonado...'
            })
        }

        return res.status(200).json({
            menasaje: 'mira, ya encontre gente para hacerte compañia.',
            numeroUsuarios: Admin.length,
            datos: Admin
        })

        
    } catch (error) {

        return res.status(400).json({
            mensaje: 'no pude... no le vaya a pegar a Dobby amo admin ;-;',
            problema: error || error.message
        });
        
    }
}