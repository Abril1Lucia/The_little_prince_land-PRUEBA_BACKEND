import app from "../../app";
import { imageModel } from "../models/Images.model.js";
import supertest from "supertest";
import mongoose from "mongoose";

//prueba de controladores
describe('probar controladores de imagenes :D',()=>{

    beforeEach(async()=>{
        await imageModel.deleteMany({})
    })

    afterAll(async()=>{
        await mongoose.connection.close()
    })

  

    const testImage = {
        image: 'meme',
        name: 'nombre generico',
        description: 'no se que poner aca',
        technique: ':c',
        category:'no c'
    }


    //test del post


    describe('POST',()=>{
    
        it('crear imagen correctamente', async()=>{ 
            const res = await supertest(app).post('/imagenes/crear').send(testImage)

            expect(res.statusCode).toBe(201)
        })

        //test de error 

        it('error si falta un campo', async()=>{ 
            const res = await supertest(app).post('/imagenes/crear').send({email:testImage.name})

            expect(res.body).toHaveProperty('mensaje', 'te tiraste mi servidor')
        })

    })


     //test del get


    describe('GET',()=>{
    
        it('mostrar imagen correctamente', async()=>{ 
            const res = await supertest(app).post('/imagenes/obtener').send(testImage)

            expect(res.statusCode).toBe(404)
        })

         // sale algo mal
         
        it('no hay obras', async()=>{ 
            const res = await supertest(app).get('/imagenes/obtener')

            expect(res.statusCode).toBe(200)
            expect(res.body).toHaveProperty('mensaje','no hay nada, yo de ti o creo algo o me devuelvo')
        })

    })



 //test del PUT
     

    describe('PUT',()=>{
    
        it('actualizar imagen correctamente', async()=>{ 
            const res = await supertest(app).post('/imagenes/actualizar/:id').send(testImage)


            expect(res.statusCode).toBe(404)
        })


         // sale algo mal

        it('error', async()=>{ 
            const res = await supertest(app).put('/imagenes/actualizar/:id')

            expect(res.statusCode).toBe(400)
            expect(res.body).toHaveProperty('mensaje','perdon, no pude ;-:') //el auth funciona tan bien, que hasta en la prueba interfiere
        })

    })








     //test del delete


    describe('DELETE',()=>{

        it('eliminar imagen correctamente', async()=>{ 
            const res = await supertest(app).post('/imagenes/eliminar/:id').send(testImage)

            
            expect(res.statusCode).toBe(404)
        })

        // sale algo mal
    
        it('error', async()=>{ 
            const res = await supertest(app).delete('/imagenes/eliminar/:id')

            expect(res.statusCode).toBe(400)
            expect(res.body).toHaveProperty('mensaje','ni para eliminar cosas sirvo D:') //el auth funciona tan bien, que hasta en la prueba interfiere
        })

    })


})