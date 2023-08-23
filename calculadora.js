 const somar = (valor1, valor2) => {
    return valor1 + valor2;

}


const subtracao = (valor1, valor2) => {
    return valor1 - valor2;

}


const multiplicacao = (valor1, valor2) => {
    return valor1 * valor2;

}



const dividisao = (valor1, valor2) => {
    if(valor2 == 0) {
        throw new Error("Não pode dividir")
    }
    return valor1/ valor2;


}

module.exports = {
 dividisao,
 somar,
 subtracao,
 multiplicacao
}