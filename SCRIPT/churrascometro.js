let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular () {

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let quantidadeTotalCarne = carnePorPessoas(duracao) * adultos + (carnePorPessoas(duracao) / 2 * criancas)
    let quantidadeTotalCerveja = cervejaPorPessoas(duracao) * adultos;
    let quantidadeTotalBebidas = bebidasPorPessoas(duracao) * adultos + (bebidasPorPessoas(duracao) / 2 * criancas)

    resultado.innerHTML = `<p> ${quantidadeTotalCarne / 1000} kg de Carne</p>`
    resultado.innerHTML += `<p> ${Math.ceil(quantidadeTotalCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p> ${Math.ceil(quantidadeTotalBebidas / 2000)} Pet's 2l de Bebidas</p>`
}
function carnePorPessoas(duracao) {
    
    if (duracao >= 6){
        return 650;
    }
    else {
        return 400;
    }
}
function cervejaPorPessoas(duracao) {
    
    if (duracao >= 6){
        return 2000;
    }
    else {
        return 1200;
    }
}
function bebidasPorPessoas(duracao) {
    
    if (duracao >= 6){
        return 1500;
    }
    else {
        return 1000;
    }
}