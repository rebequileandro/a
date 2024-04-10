import { titleCase, mayorDeEdad } from '../components/ProfileCard/ProfileCard'

describe('funciones dentro del componente ProfileCard', () => {

    describe('titleCase', () => {
        test('debe retornar un string', () => {
            const result = titleCase('un valor')
            expect(typeof result).toBe("string")
        })
        test('debe retornar el string transformado', () => {
            expect(titleCase('en un lugar de la mancha')).toBe("En Un Lugar De La Mancha")
        })
        test('debe retornar un string vacio', () => {
            expect(titleCase('')).toBe("")
        })
    })
    describe('mayorDeEdad', () => {
        test('debe debolver un boolean', () => {
            expect(mayorDeEdad(19)).toBe('boolean')
        })
        test('si es mayor de edad retorna true', () => {
            expect(mayorDeEdad(20)).toBeTruthy();
        })
        test('si es mayor de 18 retorna true', () => {
            expect(mayorDeEdad(18)).toBeTruthy();
        })
        test('si es menor de 18 retorna true', () => {
            expect(mayorDeEdad(17)).toBeFalsy();
        })
    })
})