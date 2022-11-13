function carregar () {
    var msg = window.document.querySelector('#msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} hora(s)`
    if (hora < 12) {
        console.log('dia')
        img.src = 'img/manha.png'
        document.body.style.background = '#94CEFA'
    }
    else if (hora < 18) {
        console.log('Tarde')
        img.src = 'img/tarde.png'
        document.body.style.background = '#FD8701'
    }
    else {
        console.log('Noite')
        img.src = 'img/noite.png'
        document.body.style.background = '#443553'
    }
}