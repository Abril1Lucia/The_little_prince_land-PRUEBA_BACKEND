import app from "../../app";
import { userModel } from "../models/Users.model.js";
import supertest from "supertest";
import mongoose from "mongoose";


describe('probar controladores de usuarios :)',()=>{

    beforeEach(async()=>{
        await userModel.deleteMany({})
    })

    afterAll(async()=>{
        await mongoose.connection.close()
    })

    const testUser = {
        image: 'un random',
        fullName: 'Lazaro Lucky',
        email: 'Morningstar@gmail',
        password: 'ElQueMeHackeeVaPreso',
        phone:'1234567890'
    }

    describe('POST',()=>{
    
        it('crear user correctamente', async()=>{ 
            const res = await supertest(app).post('/usuarios/crear').send(testUser)

            expect(res.statusCode).toBe(201)
        })

        //segundo caso de prueba
        //test de error si falta un campo :)

        it('error si falta un campo', async()=>{ 
            const res = await supertest(app).post('/usuarios/crear').send({email:testUser.email})

            expect(res.body).toHaveProperty('mensaje', 'no se pudo we, estas muy feo para esta plataforma, perdon')
        })

    })

    describe('GET',()=>{
    
        it('mostrar que no hay users', async()=>{ 
            const res = await supertest(app).get('/usuarios/obtener')

            expect(res.statusCode).toBe(401)
            expect(res.body).toHaveProperty('mensaje','no hay token, no tienes permiso para pasar, devuelvete o te doy chancla 🩴')
        })

    })
})
