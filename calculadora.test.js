const { somar, dividisao, multiplicacao, subtracao } = require("./calculadora")
describe("Iremos testar os calculos do nosso sistema",
    () => {
        it("Vai realizar a soma de dois numeros", () => {
            //TESTE de Unidade
            expect(somar(5, 5)).toBe(10)
            expect(somar("5", 5)).toBe(10)

        }) 
    })

describe("Iremos testar os calculos do nosso sistema",
    () => {
        it("Vai realizar a divisão de dois numeros", () => {
            //TESTE de Unidade
            expect(dividisao(5, 5)).toBe(1)
            expect(() => {
                dividisao(5, 0);
              }).toThrow("Não pode dividir");

        })
    })

describe("Iremos testar os calculos do nosso sistema",
    () => {
        it("Vai realizar a multiplicacao de dois numeros", () => {
            //TESTE de Unidade
            expect(multiplicacao(5, 5)).toBe(25)

        })
    })

describe("Iremos testar os calculos do nosso sistema",
    () => {
        it("Vai realizar a subtracao de dois numeros", () => {
            //TESTE de Unidade
            expect(subtracao(5, 5)).toBe(0)

        })
    })




