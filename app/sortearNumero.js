const menorValor = 1
const maiorValor = 100
const numeroSecreto = gerarNumeroSecreto()


function gerarNumeroSecreto(){
   return parseInt(Math.random()* maiorValor +1)
}

console.log('Numero secreto é: ',numeroSecreto)

const elementoMenorValor = document.querySelector('#menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.querySelector('#maior-valor')
elementoMaiorValor.innerHTML = maiorValor