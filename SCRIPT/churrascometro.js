// Carne - 400g por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml
// Crianças valem por 0,5 (Metade de cada item)

let input_adultos = document.getElementsByTagName("input")[0]
let input_criancas = document.getElementsByTagName("input")[1]
let input_duracao = document.getElementsByTagName("input")[2]
let button = document.getElementById("button")
let resultado = document.getElementById("resultado")

function calcular(){
    console.log("Calculando...")

    let adultos = input_adultos.value
    let criancas = input_criancas.value
    let duracao = input_duracao.value

    let quantidadeTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao)/2 * criancas)
    let quantidadeTotalCerveja = cervejaPorPessoa(duracao) * adultos
    let quantidadeTotalBebidas = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao)/2 * criancas)

    resultado.innerHTML = `<p><b>${quantidadeTotalCarne /1000}kg de Carne</b></p>`
    resultado.innerHTML += `<p><b>${Math.ceil(quantidadeTotalCerveja /355)} Latas de Cerveja</b></p>`
    resultado.innerHTML += `<p><b>${Math.ceil(quantidadeTotalBebidas /2000)} Garrafas Pet's de Bebida</b></p>`

}
function carnePorPessoa(duracao){
    if(duracao >= 6){
        return 650
    }else{
        return 400
    }
}
function cervejaPorPessoa(duracao){
    if(duracao >= 6){
        return 2000
    }else{
        return 1200
    }
}
function bebidasPorPessoa(duracao){
    if(duracao >= 6){
        return 1500
    }else{
        return 1000
    }
}

button.addEventListener("click", calcular)