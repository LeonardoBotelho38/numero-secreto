function verificaSeChutePossuiValorValido(chute){
    const numero = +chute

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor invalido</div>'
    }

    if(numeroForMaiorOuMenorQueValorPermitido(numero)){
        elementoChute.innerHTML += 
        `<div>Valor invalido: Diga um valor entre ${menorValor} e ${maiorValor}</div>`
    }
    
    if(numero === numeroSecreto){
        document.body.innerHTML = 
        `<h1>Você acerto!</h1>
         <h3>O numero secreto era ${numeroSecreto}
         <h2>&#9996;&#128513</h2> 
        `
    }

    else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O numero secreto é menor &#128071</div>`
    }

    else{
        elementoChute.innerHTML += 
        `<div>O numero secreto é maior &#9757`
    }

    
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}
