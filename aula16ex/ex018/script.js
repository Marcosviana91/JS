var valores_adicionados = []

function adicionar_valor(n) {
    //adiciona um valor ao elemento selector do HTML
    let itens_adicionados = document.getElementById('numAddSel')
    let numTxt = document.getElementById('valortxt')
    if (valores_adicionados.length == 0) {
        itens_adicionados.innerHTML = ''
    }
    if (numTxt.value.length == 0 || (valores_adicionados.indexOf(Number(numTxt.value)) != -1) ) {
        window.alert('Insira algum valor novo para adicionar.')
    } else if (Number(numTxt.value) <1 || Number(numTxt.value) > 100) {
        window.alert('Digite um valor entre 1 e 100')
    } else {
        document.getElementById('resFinal').innerHTML = ''
        valores_adicionados.push(Number(numTxt.value))
        let item = document.createElement('option')
        item.text = `Adicionado o número ${numTxt.value}`
        itens_adicionados.appendChild(item)
        // itens_adicionados.setAttribute('size', 10)
    }
    numTxt.value = ''// limpar o valor
    numTxt.focus() // puxar o foco
}

function finalizar() {
    let doc_resFinal = document.getElementById('resFinal')
    doc_resFinal.innerHTML = ''
    if (valores_adicionados.length == 0) {
        window.alert('Adicione valores primeiro.')
    } else {
        doc_resFinal.innerHTML = (
            `
            Ao todo temos ${valores_adicionados.length} valores cadastrados.<br>
            O maior valor é ${menor_maior(valores_adicionados)[1]}.<br>
            O menor valor é ${menor_maior(valores_adicionados)[0]}.<br>
            Somando todos os valores temos ${soma_media(valores_adicionados)[0]}.<br>
            A média dos valores digitados é ${soma_media(valores_adicionados)[1]}.
            `
        )
    }
}

function menor_maior(vetor) {
    let menor = vetor[0]
    let maior = vetor[0]
    for (pos in vetor) {
        if (vetor[pos] < menor) {
            menor = vetor[pos]
        }
        if (vetor[pos] > maior) {
            maior = vetor[pos]
        }
    }
     return [menor, maior]
}

function soma_media(vetor) {
    let soma = 0
    for (item in vetor) {
        soma += vetor[item]
    }
    return [soma, (soma/vetor.length)]
}