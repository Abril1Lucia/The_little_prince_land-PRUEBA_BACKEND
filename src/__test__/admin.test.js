import app from "../../app";
import supertest from "supertest";
import mongoose from "mongoose";
import { adminModel } from "../models/admin.models";


describe('probar controladores de imagenes :D',()=>{

    beforeEach(async()=>{
        await adminModel.deleteMany({})
    })

    afterAll(async()=>{
        await mongoose.connection.close()
    })


    const testAdmin = {
        image: 'meme',
        fullname: 'nombre generico',
        email: 'no se que poner aca',
        password: ':c',
        role:'no c'
    }

    describe('POST',()=>{
    
        it('crear admin correctamente', async()=>{ 
            const res = await supertest(app).post('/Admin/crear').send(testAdmin)

            expect(res.statusCode).toBe(201)
        })

        it('error', async()=>{ 
            const res = await supertest(app).post('/Admin/crear').send({email:testAdmin.email})

            expect(res.body).toHaveProperty('mensaje', 'Mmmmm... tas seguro que eres un admin? esta medio sospechoso... I-I')
        })

    })

    describe('GET',()=>{
    
        it('mostrar que no hay users', async()=>{ 
            const res = await supertest(app).get('/Admin/obtener')

            expect(res.statusCode).toBe(200)
            expect(res.body).toHaveProperty('mensaje','tas solo y abandonado...')
        })

    })
})



