import { titleCase } from '../components/ProfileCard'

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
})