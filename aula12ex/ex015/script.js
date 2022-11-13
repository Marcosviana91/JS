function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')//# pega id
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    }
    else {
        var fSex = window.document.getElementsByName('radsex')//retorna uma lista com todos os checks de radsex
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')//cria uma tag img
        img.setAttribute('id', 'foto')//cria um atributo id com valor foto id='foto'
        if (fSex[0].checked) {
            genero = 'Homem'
            if (idade < 4) {
                img.setAttribute('src', 'img/bebe.png')
            }
            else if (idade < 14) {
                img.setAttribute('src', 'img/crianca_masc.png')
            }
            else if (idade < 24) {
                img.setAttribute('src', 'img/jovem_masc.png')
            }
            else if (idade < 35) {
                img.setAttribute('src', 'img/jovem_adulto_masc.png')
            }
            else if (idade < 55) {
                img.setAttribute('src', 'img/adulto_masc.png')
            }
            else {
                img.setAttribute('src', 'img/idoso_masc.png')
            }
        }
        else {
            genero = 'Mulher'
            if (idade < 4) {
                img.setAttribute('src', 'img/bebe.png')
            }
            else if (idade < 14) {
                img.setAttribute('src', 'img/crianca_fem.png')
            }
            else if (idade < 24) {
                img.setAttribute('src', 'img/jovem_fem.png')
            }
            else if (idade < 35) {
                img.setAttribute('src', 'img/jovem_adulto_fem.png')
            }
            else if (idade < 55) {
                img.setAttribute('src', 'img/adulto_fem.png')
            }
            else {
                img.setAttribute('src', 'img/idoso_fem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)//adiciona o elemento ao HTML
    }
}