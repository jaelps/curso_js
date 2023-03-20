function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fAno.value.length == 0 || Number(fAno.value) > ano){
        window.alert('[erro] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebe-masculino.png')
            } else if (idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-masculino.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulto-masculino.png')
            } else {
                //idoso
                img.setAttribute('src', 'velho-masculino.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebe-feminino.png')
            } else if (idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-feminino.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulto-feminino.png')
            } else {
                //idoso
                img.setAttribute('src', 'velho-feminino.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}