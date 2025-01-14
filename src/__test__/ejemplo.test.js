import suma from "../utils/intento.js";

describe('probar funcion suma',()=>{
    it('deberia sumar dos numeros positivos correctamente',()=>{
        expect(suma(5,2)).toBe(7);
    })

    it('suma de negativos correctamente',()=>{
        expect(suma(-2,-4)).toBe(-6);
    })
})