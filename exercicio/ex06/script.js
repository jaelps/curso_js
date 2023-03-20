var vNumero = window.document.querySelector('input#txtn')
var bloc = window.document.querySelector('select#seltab')
var res = document.querySelector('div#res')
var vBloc = []


function adicinar(){
    var vN = Number(vNumero.value)

    if (vN <= 100 && vN >= 1 ){
        var item = document.createElement('option')
        let unidade = vBloc.indexOf(vN)

        if (unidade != -1){
            window.alert('Valor já existente')
        } else {
            var adicinar = vBloc.push(vN)
            adicinar++
            item.text = `O valor ${vN} foi adicionado`
            bloc.appendChild(item)
        }

    } else {
        window.alert('Valor é invalido')
    }
}

function analisar(){
    if(vBloc <= 0){
        window.alert('Favor informar valor valido!')
    } else {
        res.innerHTML += `<p>Ao todo temos ${vBloc.length} números cadastrados</p>`

        res.innerHTML += `<p> O maior valor informado é ${Math.max(...vBloc)}</p>`

        res.innerHTML += `O menor valor informado é ${Math.min(...vBloc)}`

        var somaTotal = ''
        for (var i = 0; i< vBloc.length; i++){
            somaTotal= Number(somaTotal) + Number(vBloc[i])
        }
        res.innerHTML += `<p>A soma de todos os numeros listados é ${somaTotal}</p>`

        var mediaI = Number(somaTotal/(vBloc.length))
        res.innerHTML += `A media dos valores digitados é ${mediaI}`
    }

}