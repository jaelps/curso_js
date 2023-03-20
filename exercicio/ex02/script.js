function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        img.src = 'imagem/manha-trans.png'
        document.body.style.background = '#ffe457'
    } else if (hora >= 12 && hora < 18){
        img.src = 'imagem/tarde-trans.png'
        document.body.style.background = '#a75320'
    } else {
        img.src = 'imagem/noite-trans.png'
        document.body.style.background = '#171f3c'
    }
}

