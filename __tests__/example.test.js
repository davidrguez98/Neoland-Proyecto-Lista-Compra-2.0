//Los errores deben de estar recogidos en la misma función que se encuentra
//en los otros archivos. Este solo es para describir errores
function suma(a, b) { 
    
    if (a === undefined) {
        throw new Error("el parametro 'a' es requerido");
    }

    if (b === undefined) {
        throw new Error("el parametro 'b' es requerido");
    }

    if (typeof a === String) {
        throw new Error("el parametro 'a' debe de ser un number");
    }

    if (typeof b === String) {
        throw new Error("el parametro 'b' debe de ser un number");
    }

    return a + b
}

describe("tests funcion suma", () => {
    test("sumar 2 + 2", () => {
        expect(suma(2, 2)).toBe(4)
    } )

    test("parametro 'a' requerido", () => {
        expect(() => suma(undefined, 2)).toThrow("el parametro 'a' es requerido")
    } )

    test("parametro 'b' requerido", () => {
        expect(() => suma(2, undefined)).toThrow("el parametro 'b' es requerido")
    } )

    test("parametro 'a' debe de ser un number", () => {
        expect(() => suma("hola", 2).toThrow("el parametro 'a' debe de ser un number"))  
    })

    test("parametro 'b' debe de ser un number", () => {
        expect(() => suma(2, "hola").toThrow("el parametro 'b' debe de ser un number"))  
    })
})