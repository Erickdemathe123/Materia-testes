const express = require("express")
const app = express()
const porta = 3000;
const { somar, subtracao, multiplicacao, dividisão } = require("./calculadora")

app.get("/rota", (req, res) => {
    const calculo = somar(2, 3)
    res.send("A resposta do calculo é: " + calculo)
})

app.get("/rota", (req, res) => {
    const calculo = subtracao(2, 3)
    res.send("A resposta do calculo é: " + calculo)
})

app.get("/rota", (req, res) => {
    const calculo = multiplicacao(2, 3)
    res.send("A resposta do calculo é: " + calculo)
})

app.get("/rota", (req, res) => {
    const calculo = dividisão(2, 3)
    res.send("A resposta do calculo é: " + calculo)
})


app.listen(porta, () => {
    console.log('Opa,nosso servidor levantou' + porta)

}) 