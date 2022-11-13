function contar() {
    let numInicial = Number(document.querySelector('#numInicial').value)
    let numFinal = Number(document.querySelector('#numFinal').value)
    let numPasso = Number(document.querySelector('#numPasso').value)
    let resultado = document.querySelector('#resultado')
    if (numInicial == 0 || numFinal == 0) {
        resultado.innerHTML = 'Não pode conter dados vazios...<br>Impossível contar.'
        //window.alert('Não pode conter dados vazios...')
    } else {
        console.log(`Inicio: ${numInicial}`)
        console.log(`Fim: ${numFinal}`)
        console.log(`Passo: ${numPasso}`)
        if (numPasso <= 0) {
            window.alert('Passo igual à 0, considerando passo igual à 1')
            numPasso = 1
        }
        resultado.innerHTML = 'Contando:<br>'
        if (numInicial < numFinal) {//Contagem progressiva
            for (let c = numInicial; c <= numFinal; c+=numPasso) {
               console.log('contando...')
               resultado.innerText += `${c}`
               if (c+numPasso <= numFinal) {//Confere se o próximo passo ainda estará no loop
                   resultado.innerText += '👉'
               }
               else {
                   resultado.innerText += '☑️'
               }
            }
        } else if (numFinal < numInicial) {//Contagem reefressiva
            for (let c = numInicial; c >= numFinal; c-=numPasso) {
                console.log('contando...')
                resultado.innerText += `${c}`
                if (c-numPasso >= numFinal) {//Confere se o próximo passo ainda estará no loop
                    resultado.innerText += '👉'
                }
                else {
                    resultado.innerText += '☑️'
                }
            }
        } else {
            console.log('Inicio é igual ao fim.')
        }
    }
}
